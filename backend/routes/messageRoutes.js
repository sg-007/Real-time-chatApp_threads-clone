import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import {
    getMessages,
    sendMessage,
    getConversations,
} from "../controllers/messageController.js";

const router = express.Router();

router.post("/", protectRoute, sendMessage);
router.get("/conversations", protectRoute, getConversations);
router.get("/:otherUserId", protectRoute, getMessages);

export default router;
