import React from "react";
import s from "../MyPosts.module.scss";

const Post = ({ message, likesCount }) => {
  return (
    <div className={s.post}>
      <p>{message}</p>
      <span>{likesCount} likes</span>
    </div>
  );
};

export default Post;
