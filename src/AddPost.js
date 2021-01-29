import React from "react";
import { useMutation, queryCache } from "react-query";
import axios from "axios";
import PostForm from "./components/PostForm";
import { useHistory } from "react-router-dom";

export default function AddPost() {
  const history = useHistory();
  const [createPost, { isLoading, isError, error, data }] = useMutation(
    (values) => {
      return axios
        .post(`https://jsonplaceholder.typicode.com/posts`, values)
        .then((res) => res.data);
    },
    {
      onSuccess: (data, values) => {
        queryCache.invalidateQueries("posts");
        history.push("/");
      },
    }
  );

  return (
    <PostForm
      initialValues={{ id: "", title: "", body: "" }}
      onSubmit={(values) => createPost(values)}
    />
  );
}
