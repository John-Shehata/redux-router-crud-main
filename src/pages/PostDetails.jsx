import React from "react";
import UsePostDetails from "../hooks/use-post-details";

const PostDetails = () => {

  const { singlePost, loading, error } = UsePostDetails();

  return loading ? (
    "Loading..."
  ) : error ? (
    <tr>
      <td colSpan={3}>{error}</td>
    </tr>
  ) : (
    <div>
      <p>Title : {singlePost?.title}</p>
      <p>Description : {singlePost?.description}</p>
    </div>
  );
};

export default PostDetails;
