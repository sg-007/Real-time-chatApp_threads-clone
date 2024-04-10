import React from "react";
import LoginCard from "../components/LoginCard";
import { useRecoilValue } from "recoil";
import authScreenAtom from "../atoms/authAtom";
import SignupCard from "../components/SignUpCard";

const AuthPage = () => {
    const authScreenState = useRecoilValue(authScreenAtom);
    console.log(authScreenState);
    return <>{authScreenState === "login" ? <LoginCard/> : <SignupCard/>}</>
};

export default AuthPage;
