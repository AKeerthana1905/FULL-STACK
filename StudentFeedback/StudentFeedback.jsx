import React, { useState } from "react";

const StudentFeedback = () => {
  const [studentName, setStudentName] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!studentName || !rating || !comments) {
      alert("❌ Please fill all fields");
      return;
    }

    const feedback = {
      name: studentName,
      rating,
      comments,
    };

    setFeedbackList([...feedbackList, feedback]);

    alert("✅ Feedback submitted successfully!");

    // Reset form
    setStudentName("");
    setRating("");
    setComments("");
  };

  return (
    <div style={styles.container}>
      <h2>📝 Student Feedback</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          style={styles.input}
        />

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          style={styles.input}
        >
          <option value="">Rate the Course</option>
          <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
          <option value="4">⭐⭐⭐⭐ (Good)</option>
          <option value="3">⭐⭐⭐ (Average)</option>
          <option value="2">⭐⭐ (Poor)</option>
          <option value="1">⭐ (Very Poor)</option>
        </select>

        <textarea
          placeholder="Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>
          Submit Feedback
        </button>
      </form>

      <h3>📌 Submitted Feedback</h3>

      {feedbackList.length === 0 ? (
        <p>No feedback submitted yet</p>
      ) : (
        feedbackList.map((item, index) => (
          <div key={index} style={styles.card}>
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Rating:</strong> {item.rating} ⭐</p>
            <p><strong>Comments:</strong> {item.comments}</p>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    width: "420px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  },
  form: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    height: "80px",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#2196F3",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  card: {
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
};

export default StudentFeedback;
