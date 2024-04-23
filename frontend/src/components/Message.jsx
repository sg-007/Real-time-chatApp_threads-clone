import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { selectedConversationAtom } from "../atoms/messagesAtom";
import userAtom from "../atoms/userAtom";
import { BsCheck2All } from "react-icons/bs";

const Message = ({ ownMessage, message }) => {
    const selectedConversation = useRecoilValue(selectedConversationAtom);
    const user = useRecoilValue(userAtom);

    return (
        <>
            {ownMessage ? (
                <Flex gap={2} alignSelf={"flex-end"}>
                    {false && (
                        <Flex bg={"green.800"} maxW={"350px"} p={1} borderRadius={"md"}>
                            <Text color={"white"}>{message.text}</Text>
                            <Box
                                alignSelf={"flex-end"}
                                ml={1}
                                color={message.seen ? "blue.400" : ""}
                                fontWeight={"bold"}
                            >
                                <BsCheck2All size={16} />
                            </Box>
                        </Flex>
                    )}
                    {true && (
                        <Flex mt={0} w={"200px"}>
                            <Image
                                src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=1800&t=st=1713898495~exp=1713899095~hmac=be0df389ee9da1836f3b9f7059f1306524f96f47ecc99182448388504e15c489"
                                alt="Message Img"
                                borderRadius={4}
                            />
                        </Flex>
                    )}
                    <Avatar src={user.profilePic} w={7} h={7} />
                </Flex>
            ) : (
                <Flex gap={2}>
                    <Avatar src={selectedConversation.userProfilePic} w={7} h={7} />
                    {message.text && (
                        <Text maxW={"350px"} bg={"blue.400"} p={1} borderRadius={"md"} color={"black"}>
                            {message.text}
                        </Text>
                    )}
                    {message.img && (
                        <Flex mt={5} w={"200px"}>
                            <Image
                                src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=1800&t=st=1713898495~exp=1713899095~hmac=be0df389ee9da1836f3b9f7059f1306524f96f47ecc99182448388504e15c489"
                                alt="Message Img"
                                borderRadius={4}
                            />
                        </Flex>
                    )}
                </Flex>
            )}
        </>
    );
};

export default Message;
