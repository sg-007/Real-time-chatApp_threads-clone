import {
    Flex,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import useShowToast from "../hooks/useShowToast";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { conversationsAtom, selectedConversationAtom } from "../atoms/messagesAtom";
import { BsFillImageFill } from "react-icons/bs";
import usePreviewImg from "../hooks/usePreviewImg";

const MessageInput = ({ setMessages }) => {
    const [messageText, setMessageText] = useState("");
    const showToast = useShowToast();
    const selectedConversation = useRecoilValue(selectedConversationAtom);
    const setConversations = useSetRecoilState(conversationsAtom);
    const imageRef = useRef(null);
    const { onClose } = useDisclosure();
    const { handleImageChange, imgUrl, setImgUrl } = usePreviewImg();

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!messageText) return;

        try {
            const res = await fetch("/api/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: messageText,
                    recipientId: selectedConversation.userId,
                }),
            });
            const data = await res.json();
            if (data.error) {
                showToast("Error", data.error, "error");
                return;
            }
            setMessages((messages) => [...messages, data]);

            setConversations((prevConversations) => {
                const updatedConversations = prevConversations.map((conversation) => {
                    if (conversation._id === selectedConversation._id) {
                        return {
                            ...conversation,
                            lastMessage: {
                                text: messageText,
                                sender: data.sender,
                            },
                        };
                    }
                    return conversation;
                });
                return updatedConversations;
            });
            setMessageText("");
        } catch (error) {
            showToast("Error", error.message, "error");
        }
    };

    return (
        <Flex gap={2} alignItems={"center"}>
            <form onSubmit={handleSendMessage} style={{ flex: 95 }}>
                <InputGroup>
                    <Input
                        w={"full"}
                        placeholder="Type a message"
                        onChange={(e) => setMessageText(e.target.value)}
                        value={messageText}
                    />
                    <InputRightElement onClick={handleSendMessage}>
                        <IoSendSharp />
                    </InputRightElement>
                </InputGroup>
            </form>
            <Flex flex={5} cursor={"pointer"}>
                <BsFillImageFill size={20} onClick={() => imageRef.current.click()} />
                <Input type={"file"} hidden ref={imageRef} onChange={handleImageChange} />
            </Flex>
            <Modal
                isOpen={imgUrl}
                onClose={() => {
                    onClose();
                    setImgUrl("");
                }}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex mt={5} w={"full"}>
                            <Image src={imgUrl} />
                        </Flex>
                        <Flex justifyContent={"flex-end"} my={2}>
                            <IoSendSharp size={24} cursor={"pointer"} />
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Flex>
    );
};

export default MessageInput;
