import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Post() {
  const { id } = useParams();
  const { isLoading, data, isFetching, isError, error } = useQuery(
    ["post", id],
    () =>
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.data)
  );
  return isLoading ? (
    "..."
  ) : isError ? (
    <span>{error}</span>
  ) : (
    <>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
      {isFetching && "Updating ..."}
    </>
  );
}
