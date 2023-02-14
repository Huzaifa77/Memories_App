import React, { useState } from "react";
import ReactImageFileToBase64 from "react-file-image-to-base64";
import { useDispatch } from "react-redux";
import { PostStateInterface } from "../../interfaces/post_interface";
import { sendPostsThunk } from "../../reducers/postSlice";
import type { AppDispatch } from "../../store/store";

const Form = () => {
  const dispatch: AppDispatch = useDispatch();
  const [uploadedImage, setUploadImage] = useState('Choosen Image...')
  const [postData, setPostData] = useState<PostStateInterface>({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(sendPostsThunk(postData)); 
  };

  const clear = () => {};

  const handleFiles = (files: any)=> {
    setPostData({...postData,selectedFile: files[0].base64_file})
    setUploadImage(files[0].file_name)
  }

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="font-bold text-blue-500 items-center mb-3">
          Creating a memory
        </div>
        <input
          type="text"
          value={postData.creator}
          placeholder="Creator"
          className="block text-gray-700 text-sm border-2 mb-3 my-1"
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        ></input>
        <input
          type="text"
          value={postData.title}
          placeholder="Title"
          className="block text-gray-700 text-sm border-2 mb-3 my-1"
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        ></input>
        <input
          type="text"
          value={postData.message}
          placeholder="Message"
          className="block text-gray-700 text-sm border-2 mb-3 my-1"
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        ></input>
        <input
          type="text"
          value={postData.tags}
          placeholder="Tags"
          className="block text-gray-700 text-sm border-2 mb-3 my-1"
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        ></input>
        <div className="my-5">
          <ReactImageFileToBase64
            multiple={false} // MULTIPLE IS SET TO FALSE BY DEFAULT, SO FEEL FREE TO REMOVE THIS  CHUNK IF YOU WANT
            onCompleted={handleFiles}
            preferredButtonText="Click Me !"
          />
          <div className="inline-block ml-2 max-w-xs">{uploadedImage}</div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-7 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-7 rounded focus:outline-none focus:shadow-outline"
          onClick={clear}
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default Form;
