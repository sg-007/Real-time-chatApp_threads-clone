import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import useShowToast from "./useShowToast";

const useFollowUnfollow = (user) => {
    const currentUser = useRecoilValue(userAtom);
    const [following, setFollowing] = useState(user.followers.includes(currentUser?._id));
    const [updating, setUpdating] = useState(false);
    const showToast = useShowToast();

    const handleFollowUnfollow = async () => {
        if (!currentUser) {
            showToast("Error", "Please login to folow", "error");
            return;
        }
        if (updating) return;
        setUpdating(true);
        try {
            const res = await fetch(`/api/users/follow/${user._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            if (data.error) {
                showToast("Error", error, "error");
                return;
            }
            if (following) {
                showToast("Success", `Unfollowed ${user.name}`, "success");
                user.followers.pop(); // simulating removal of followers (happens only on client side)
            } else {
                showToast("Success", `Followed ${user.name}`, "success");
                user.followers.push(currentUser?._id); // simulate adding of followers
            }
            setFollowing(!following);
            console.log(data);
        } catch (error) {
            showToast("Error", error, "error");
        } finally {
            setUpdating(false);
        }
    };
    return { handleFollowUnfollow, updating, following };
};

export default useFollowUnfollow;
