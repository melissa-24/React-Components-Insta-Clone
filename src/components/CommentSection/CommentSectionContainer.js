// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);
  const [newComment, setNewComment] = useState({username: "", text: ""});
  

  function changeComment(e) {
      setNewComment({username: "tester", text: e.target.value});
  }

  function submitComment(e) {
    e.preventDefault();
    if(newComment.text !== "") {
      
      setComments([...comments, newComment]);
      setNewComment({username: "", text: ""});
    }
    
  }

  return (
    <div>
      {/* map through the comments data and return the Comment component */
        comments.map((comment, index)  => (
          <Comment key={index} comment={comment} />
        ))
      }
      <CommentInput comment = {newComment.text} changeComment = {changeComment} submitComment={submitComment} />
    </div>
  );
};

export default CommentSection;