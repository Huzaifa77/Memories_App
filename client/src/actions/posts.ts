import * as api from "../api";
import { PostStateInterface } from "../interfaces/post_interface";

export const createPost = (post: PostStateInterface) => async (dispatch: any) => {
    // try {
    //   const { data } = await api.insertPost(post);
    //   dispatch({ type: "CREATE", payload: data });
    // } catch (error: any) {
    //   console.log(error.message);
    // }
  };
