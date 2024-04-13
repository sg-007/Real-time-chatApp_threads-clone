import express from "express";
import {
    createPost,
    deletePost,
    getFeedPosts,
    getPost,
    likeUnLikePost,
    replyToPost,
} from "../controllers/postController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/feed", protectRoute, getFeedPosts); 
router.get("/:id", getPost);
router.delete("/:id", protectRoute, deletePost);
router.post("/create", protectRoute, createPost);
router.put("/like/:id", protectRoute, likeUnLikePost);
router.put("/reply/:id", protectRoute, replyToPost);

export default router;
