import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as api from "../api";
import { PostStateInterface } from "../interfaces/post_interface";
import { RootState, store } from "../store/store";

export const sendPostsThunk = createAsyncThunk(
  "send/insertPost",
  async (post: PostStateInterface) => {
    try{
        const { data } = await api.insertPost(post);
        return data;
    }catch(err:any){
        return err.message
    } 
  }
);

const sendPostSlice = createSlice({
  name: "send",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendPostsThunk.fulfilled,
      (state, action:PayloadAction<PostStateInterface>) => {
        const newPost = action.payload
        return {...state,newPost}
      }
    );
  },
});

export default sendPostSlice.reducer;
export const sentPostSelector = (state:RootState) => state.send;
