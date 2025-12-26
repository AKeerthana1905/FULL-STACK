import React, { useState } from "react";

const StudentDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const students = [
    { id: 1, name: "Arun", department: "CSE" },
    { id: 2, name: "Divya", department: "ECE" },
    { id: 3, name: "Karthik", department: "IT" },
  ];

  const courses = [
    { id: 101, title: "Web Development" },
    { id: 102, title: "Data Structures" },
    { id: 103, title: "Machine Learning" },
  ];

  const renderContent = () => {
    switch (activePage) {
      case "students":
        return (
          <div>
            <h3>👨‍🎓 Students List</h3>
            <ul>
              {students.map((s) => (
                <li key={s.id}>
                  {s.name} — {s.department}
                </li>
              ))}
            </ul>
          </div>
        );

      case "courses":
        return (
          <div>
            <h3>📘 Courses Offered</h3>
            <ul>
              {courses.map((c) => (
                <li key={c.id}>{c.title}</li>
              ))}
            </ul>
          </div>
        );

      default:
        return (
          <div>
            <h3>📊 Dashboard Overview</h3>
            <p>Total Students: {students.length}</p>
            <p>Total Courses: {courses.length}</p>
          </div>
        );
    }
  };

  return (
    <div style={styles.container}>
      <h2>🏫 Student Management Dashboard</h2>

      <div style={styles.nav}>
        <button onClick={() => setActivePage("dashboard")}>
          Dashboard
        </button>
        <button onClick={() => setActivePage("students")}>
          Students
        </button>
        <button onClick={() => setActivePage("courses")}>
          Courses
        </button>
      </div>

      <div style={styles.content}>{renderContent()}</div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  },
  nav: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  content: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
};

export default StudentDashboard;
