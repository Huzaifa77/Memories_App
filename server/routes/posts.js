import express from "express";
import { createPost, getMemories } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getMemories);

router.post('/createPost',createPost)

export default router;
