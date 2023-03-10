import type {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

import Header from "components/Header";
import useFetch, { revalidate } from "http-react";
import Link from "next/link";
import type { IPost } from "src/Models";

function Post(props: {
  _id: unknown;
  content:
    | string
    | number
    | boolean
    | ReactElement<unknown, string | JSXElementConstructor<unknown>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  title:
    | string
    | number
    | boolean
    | ReactElement<unknown, string | JSXElementConstructor<unknown>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  // Update with proper types
  const { reFetch } = useFetch("/api/posts", {
    auto: false,
    id: props?._id,
    method: "DELETE",
    query: {
      id: props?._id,
    },
    onResolve() {
      revalidate("GET /api/posts");
    },
  });

  return (
    <div
      style={{
        transition: "0.12s",
      }}
      className="p-4 relative break-words rounded-md text-sm border-2 hover:bg-gray-100 m-1"
      key={`post-${props._id}`}
    >
      <button
        className="font-semibold absolute top-1 right-2 cursor-pointer"
        onClick={() => {
          const confirmation = confirm("Do you want to remove this post?");
          if (confirmation) {
            reFetch();
          }
        }}
      >
        some
      </button>
      <b className="my-2">{props.title}</b>
      <br />
      <p className="my-4">{props.content}</p>
    </div>
  );
}

export default function Posts() {
  const { data, loadingFirst, error } = useFetch<IPost[]>("/api/posts", {
    default: [],
  });

  if (loadingFirst)
    return <p className="text-xl font-semibold">Loading posts...</p>;

  if (error)
    return <p className="text-xl text-red-400">Failed to fetch posts</p>;

  const mappedPosts = data.map(post => (
    <Post _id={post._id} {...post} key={`post-${post._id}`} />
  ));

  return (
    <div>
      <Header>Your posts ({data.length})</Header>
      <div className="flex space-x-4">
        <Link
          href="/"
          className="bg-red-400 inline-block px-2 rounded-md py-1 text-white cursor-pointer"
        >
          <span>Back</span>
        </Link>
        <Link
          href="/posts/create"
          className="bg-blue-400 inline-block px-2 rounded-md py-1 text-white cursor-pointer"
        >
          <span>Add one post</span>
        </Link>
      </div>
      <div className="py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 rounded-md">
        {mappedPosts}
      </div>
    </div>
  );
}
