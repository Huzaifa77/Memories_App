import moment from "moment";
import React from "react";
import { PostStateInterface } from "../../../interfaces/post_interface";

const Post = (props: PostStateInterface): JSX.Element => {
  // console.log("sliced ", props.tags);
  return (
    <div className="bg-white rounded-lg md:w-2/5 w-2/5 mx-5 mb-2 ">
      <div className="relative z-0">
        <img
          className="w-fit h-auto mb-3 shadow-lg rounded-lg"
          src={props.selectedFile}
          alt="selected image"
        />
        <div className="absolute inset-0 flex flex-col justify-start items-start z-10 text-white p-2">
          <div>{props.creator}</div>
          <div>{moment(props.createdAt).fromNow()}</div>
        </div>
        <div className="absolute inset-0 flex justify-end items-start z-10">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="inline-block text-white rounded-lg text-sm p-1.5 cursor-pointer"
            type="button"
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
          </button>
          <div
            id="dropdown"
            className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Edit{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-2 my-2 ">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          #{props.tags}
        </span>
      </div>

      <div className="flex flex-col items-start px-4">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {props.title}
        </h5>
        <span className="text-md text-gray-500 dark:text-gray-400">
          {props.message}
        </span>

        <div className="grid grid-cols-2 gap-10 mt-2 mb-2">
          <div>
            <button className="flex hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
              </svg>

              <p className=" ml-1 inline">Like</p>
            </button>
          </div>
          <div>
            <button className="flex hover:text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="ml-1 inline">Delete</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
