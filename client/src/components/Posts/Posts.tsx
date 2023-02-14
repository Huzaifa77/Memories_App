import { useEffect, useLayoutEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { PostsState, PostStateInterface } from "../../interfaces/post_interface";
import { getPosts, postSelector } from "../../reducers/postSlice";
import type { AppDispatch } from "../../store/store";
import Post from "./Post/Post";

function Posts() {
  const dispatch: AppDispatch = useDispatch();
  const { posts, loading } = useSelector(postSelector);

  const [allPosts, setPosts] = useState(posts);

  useLayoutEffect(() => {
    dispatch(getPosts());
  }, []);

  useEffect(() => {
    setPosts(posts);
  }, [posts]);

  return (
    <>
      <div>The posts are:</div>
      {loading === "loading" ? (
        <div className="mt-2">Loading.....</div>
      ) : (
        <div className="container px-1 mt-2">
          <div className="flex flex-wrap justify-between">
          {allPosts.map((post: PostStateInterface) => (
            <Post key={post?.id} {...post} />
          ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Posts;
