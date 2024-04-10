import { AddIcon } from "@chakra-ui/icons";
import { Button, useColorModeValue } from "@chakra-ui/react";

const CreatePost = () => {
    return (
        <>
            <Button
                position={"fixed"}
                bottom={10}
                right={10}
                leftIcon={<AddIcon />}
                bg={useColorModeValue("gray.300", "gray.dark")}
            >
                Post
            </Button>
        </>
    );
};

export default CreatePost;
