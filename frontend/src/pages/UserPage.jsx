import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

export const UserPage = () => {
    return (
        <>
            <UserHeader/>
            <UserPost likes = "12,453" replies = {592} postImg = '/post1.png' postTitle = "Let's talk about threads"/>
            <UserPost likes = "9,345" replies = {781} postImg = '/post2.png' postTitle = "Nice tutorial"/>
            <UserPost likes = "11,781" replies = {233} postImg = '/post3.png' postTitle = "I love this guy"/>
            <UserPost likes = "5,716" replies = {64} postTitle = "Made with ❤️"/>
        </>
    );
};
