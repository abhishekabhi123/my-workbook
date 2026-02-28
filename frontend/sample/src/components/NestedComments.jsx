import { useState } from "react";
import "../comments.css";
import CommentItem from "./CommentItem";
import CommentInput from "./CommentInput";

export default function NestedComments() {
  let sampleComments = [
    {
      id: 1,
      comment: "This is the first comment",
      comments: [],
    },
    {
      id: 2,
      comment: "This is the second comment",
      comments: [],
    },
    {
      id: 3,
      comment: "This is the third comment",
      comments: [],
    },
  ];

  const [comments, setComments] = useState(sampleComments);
  const onComment = (comment) => {
    setComments((prev) => [comment, ...prev]);
  };

  return (
    <div>
      <div className="comment-div">
        <CommentInput onComment={onComment} />
      </div>

      <div className="comment-container">
        {comments.map((comment) => {
          return <CommentItem comment={comment} />;
        })}
      </div>
    </div>
  );
}
