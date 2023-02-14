import axios from "redaxios";

import { PostStateInterface } from "../interfaces/post_interface";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);

export const insertPost = (post: PostStateInterface) =>
  axios.post<PostStateInterface>(`${url}/createPost`, post);
