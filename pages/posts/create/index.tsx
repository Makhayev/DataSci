"use client";
import { useMemo, useState } from "react";

import Header from "components/Header";
import Input from "components/Input";
import useFetch from "http-react";

export default function Create() {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const newPostDate = useMemo(() => Date.now(), [post]);

  const newPost = {
    ...post,
    date: newPostDate,
  };

  const { reFetch: savePost } = useFetch("/api/posts", {
    auto: false,
    method: "POST",
    body: JSON.stringify({ ...newPost, _id: undefined }),
  });

  return (
    <div>
      <Header>Add post</Header>
      <div className="flex flex-wrap w-full md:w-64 items-center justify-center space-y-2">
        <div className="w-full">
          <Input
            value={post.title}
            name="title"
            onChange={event =>
              setPost(prev => ({ ...prev, title: event.target.value }))
            }
            placeholder="Title"
          />
        </div>
        <div className="w-full">
          <textarea
            placeholder="Content"
            className="border-2 border-gray-300 w-full px-3 py-1.5 rounded-md shadow-md focus:border-gray-400 resize-none"
            name="content"
            onChange={event =>
              setPost(prev => ({ ...prev, content: event.target.value }))
            }
          />
        </div>
        <div className="w-full text-center">
          <button
            onClick={savePost}
            className="px-3 py-1.5 bg-blue-400 text-white rounded-md"
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
}
