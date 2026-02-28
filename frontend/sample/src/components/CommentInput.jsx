import { useState } from "react";

export default function CommentInput({ onComment }) {
  const [commentBody, setCommentBody] = useState("");

  return (
    <div className="comment-div">
      <input
        type="text"
        placeholder="what's on your mind?"
        className="comment-input"
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
      />
      <button
        className="comment-button"
        onClick={() => {
          onComment({ comment: commentBody, comments: [] });
          setCommentBody("");
        }}
      >
        Comment
      </button>
    </div>
  );
}
