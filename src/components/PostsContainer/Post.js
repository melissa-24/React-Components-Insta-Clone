// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = ({ post }) => {
  // set up state for the likes
  const [like, setLikes] = useState(post.likes);

  const addLikes = (e) => {
    if(e.target.style.color !== "red") {
      setLikes(like => like += 1);
      e.target.style.color = "red";
    } else {
      setLikes(like => like -= 1);
      e.target.style.color = "black";
    }
  }

  return (
    <div className="post-border">
      <PostHeader
        username={post.username}
        thumbnailUrl={
          post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={post.imageUrl}
        />
      </div>
      <LikeSection like={like} addLikes={addLikes}/>
      <CommentSection
        postId={post.imageUrl}
        comments={post.comments}
      />
    </div>
  );
};

export default Post;