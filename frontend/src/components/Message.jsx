import { Avatar, Flex, Text } from "@chakra-ui/react";

const Message = ({ ownMessage }) => {
    return (
        <>
            {ownMessage ? (
                <Flex gap={2} alignSelf={"flex-end"}>
                    <Text maxW={"350px"} bg={"blue.400"} p={1} borderRadius={"md"}>
                        This is some random text from my side and I don't yet will it
                        work
                    </Text>
                    <Avatar src="" w={7} h={7} />
                </Flex>
            ) : (
                <Flex gap={2}>
                    <Avatar src="" w={7} h={7} />
                    <Text
                        maxW={"350px"}
                        bg={"blue.400"}
                        p={1}
                        borderRadius={"md"}
                        color={"black"}
                    >
                        This is some random text from the other side and I don't know
                        yet will it work..
                    </Text>
                </Flex>
            )}
        </>
    );
};

export default Message;
