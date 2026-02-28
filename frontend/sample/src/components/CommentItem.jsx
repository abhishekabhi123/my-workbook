import { useState } from "react";
import CommentInput from "./CommentInput";

export default function CommentItem({ comment }) {
  const [isReplying, setIsReplying] = useState(false);
  const [comments, setComments] = useState(comment.comments);

  const onComment = (newComment) => {
    setComments((prev) => [newComment, ...prev]);
    setIsReplying(false);
  };
  return (
    <div className="comment-tab" key={comment.id}>
      <span> {comment.comment} </span>
      {isReplying ? (
        <button className="comment-button" onClick={() => setIsReplying(false)}>
          Cancel
        </button>
      ) : (
        <button className="comment-button" onClick={() => setIsReplying(true)}>
          Reply
        </button>
      )}
      {isReplying && <CommentInput onComment={onComment} />}
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        {comments.map((comment) => {
          return <CommentItem comment={comment} />;
        })}
      </div>
    </div>
  );
}
