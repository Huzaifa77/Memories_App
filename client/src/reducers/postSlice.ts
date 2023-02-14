import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api";
import { PostsState, PostStateInterface } from "../interfaces/post_interface";
import type { RootState } from "../store/store";

const initialState: PostsState = {
  posts: [],
  loading: "not loaded",
};

export const getPosts = createAsyncThunk<PostStateInterface[]>(
  "posts/fetchAllPosts",
  async () => {
    const { data } = await api.fetchPosts();
    
    return data as PostStateInterface[];
  }
);

const fetchAllPostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    cleanupPosts: () => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = "loading";
        state.posts = []
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = "loaded", 
        state.posts = action.payload || [];
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = "error",
        state.error = action.error.message;
      });
  },
});

export default fetchAllPostSlice.reducer;
export const {cleanupPosts} = fetchAllPostSlice.actions;
export const postSelector = (state: RootState) => state.post;
