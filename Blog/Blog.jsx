import React, { useState } from "react";

const Blog = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();

    if (!commentText.trim()) {
      alert("❌ Comment cannot be empty");
      return;
    }

    setComments([
      ...comments,
      {
        id: Date.now(),
        text: commentText,
      },
    ]);

    setCommentText("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.blog}>
        <h2>📘 Understanding React Basics</h2>
        <p style={styles.meta}>By Admin • Jan 2025</p>

        <p>
          React is a JavaScript library for building user interfaces.
          It allows developers to create reusable UI components and
          efficiently manage application state.
        </p>

        <p>
          JSX makes it easier to write UI logic directly inside JavaScript.
        </p>
      </div>

      <div style={styles.commentsSection}>
        <h3>💬 Comments ({comments.length})</h3>

        <form onSubmit={handleAddComment} style={styles.commentForm}>
          <input
            type="text"
            placeholder="Write a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Post
          </button>
        </form>

        {comments.length === 0 ? (
          <p>No comments yet</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} style={styles.comment}>
              {comment.text}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    maxWidth: "900px",
    margin: "40px auto",
    padding: "10px",
  },
  blog: {
    flex: "2",
    minWidth: "260px",
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
  },
  meta: {
    fontSize: "13px",
    color: "#777",
  },
  commentsSection: {
    flex: "1",
    minWidth: "260px",
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
  },
  commentForm: {
    display: "flex",
    gap: "5px",
    marginBottom: "10px",
  },
  input: {
    flex: "1",
    padding: "8px",
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "#2196F3",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  comment: {
    padding: "8px",
    marginBottom: "5px",
    borderBottom: "1px solid #ddd",
  },
};

export default Blog;
