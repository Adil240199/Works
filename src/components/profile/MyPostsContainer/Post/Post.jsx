import React from 'react';

const Post = ({ message, likesCount }) => {
  return (
    <div>
      <p>{message}</p>
      <span>❤️ {likesCount} likes</span>
    </div>
  );
};

export default Post;
