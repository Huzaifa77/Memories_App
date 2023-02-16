import { useEffect, useLayoutEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { PostStateInterface } from "../../interfaces/post_interface";
import { getPosts, postSelector } from "../../reducers/postSlice";
import type { AppDispatch } from "../../store/store";
import Post from "./Post/Post";

type propsType = {
  setCurrentId: React.Dispatch<React.SetStateAction<string>>
}

const Posts: React.FC<propsType> = ( {setCurrentId} ) => {
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
              <Post key={post?._id} post={post} setCurrentId={setCurrentId}/>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Posts;
