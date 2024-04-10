import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";

export const UserPage = () => {
    const [user, setUser] = useState(null);
    const { username } = useParams();
	const showToast = useShowToast();

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await fetch(`/api/users/profile/${username}`);
                const data = await res.json();
                if (data.error) {
					showToast("Error", data.error, "error");
					return;
				}
				setUser(data);
            } catch (error) {
				showToast("Error", error, "error");
            }
        };

        getUser();
    }, [username, showToast]);

	if (!user)
		return null;

    return (
        <>
            <UserHeader user={user}/>
            <UserPost
                likes="12,453"
                replies={592}
                postImg="/post1.png"
                postTitle="Let's talk about threads"
            />
            <UserPost
                likes="9,345"
                replies={781}
                postImg="/post2.png"
                postTitle="Nice tutorial"
            />
            <UserPost
                likes="11,781"
                replies={233}
                postImg="/post3.png"
                postTitle="I love this guy"
            />
            <UserPost likes="5,716" replies={64} postTitle="Made with ❤️" />
        </>
    );
};
