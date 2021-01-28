import React from "react";
import { useMutation, useQuery, queryCache } from "react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostForm from "./components/PostForm";

export default function UpdatePost() {
  const { id } = useParams();
  const { isLoading, data, isFetching, isError, error } = useQuery(
    ["post", id],
    () =>
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.data)
  );

  const [savePost] = useMutation(
    (values) =>
      axios
        .patch(`https://jsonplaceholder.typicode.com/posts/${id}`, values)
        .then((res) => res.data),
    {
      onSuccess: (data, values) => {
        queryCache.invalidateQueries(["post", id]);
      },
    }
  );

  return isLoading ? (
    "..."
  ) : isError ? (
    <span>{error}</span>
  ) : (
    <>
      <PostForm initialValues={data} onSubmit={(values) => savePost(values)} />
      {isFetching && "Updating ..."}
    </>
  );
}
