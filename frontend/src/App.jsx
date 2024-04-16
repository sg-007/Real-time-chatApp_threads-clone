import { Container } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserPage } from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import userAtom from "./atoms/userAtom";
import { useRecoilValue } from "recoil";
import LogoutButton from "./components/LogoutButton";
import CreatePost from "./components/CreatePost";

function App() {
    const user = useRecoilValue(userAtom);
    return (
        <Container maxW="620px">
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={user ? <HomePage /> : <Navigate to="/auth" />}
                />
                <Route
                    path="/auth"
                    element={!user ? <AuthPage /> : <Navigate to="/" />}
                />
                <Route
                    path="/update"
                    element={
                        user ? <UpdateProfilePage /> : <Navigate to="/auth" />
                    }
                />
                <Route path="/auth" element={<AuthPage />} />
                <Route
                    path="/:username"
                    element={
                        user ? (
                            <>
                                <UserPage />
                                <CreatePost />
                            </>
                        ) : (
                            <UserPage />
                        )
                    }
                />
                <Route path="/:username/post/:pid" element={<PostPage />} />
            </Routes>
            {user && <LogoutButton />}
            {/* {user && <CreatePost/>} */}
        </Container>
    );
}

export default App;
