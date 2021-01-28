import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export default function Posts() {
  const {
    data: posts,
    isLoading,
    isError,
    isFetching,
    error,
  } = useQuery("posts", () =>
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data)
  );

  return isLoading ? (
    "..."
  ) : isError ? (
    <span>{error}</span>
  ) : (
    <>
      <Link to={`/post/add`}>Add new post</Link>
      <ul>
        {posts.map((post) => (
          <li key={`post-${post.id}`}>
            {post.title}
            <Link to={`/post/${post.id}`}>Details</Link>
            <Link to={`/post/${post.id}/update`}>Update</Link>
          </li>
        ))}
      </ul>
      {isFetching && "Updating!"}
    </>
  );
}
