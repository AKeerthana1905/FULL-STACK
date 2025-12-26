import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [loggedInRole, setLoggedInRole] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !role) {
      alert("Please enter username and select role");
      return;
    }

    setLoggedInRole(role);
  };

  // Role-based redirection (UI-based)
  if (loggedInRole === "Admin") {
    return <AdminDashboard name={username} />;
  }

  if (loggedInRole === "Student") {
    return <StudentDashboard name={username} />;
  }

  if (loggedInRole === "Instructor") {
    return <InstructorDashboard name={username} />;
  }

  return (
    <div style={styles.container}>
      <h2>🔑 Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={styles.input}
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Student">Student</option>
          <option value="Instructor">Instructor</option>
        </select>

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

/* ----- Dashboards ----- */

const AdminDashboard = ({ name }) => (
  <div style={styles.dashboard}>
    <h2>👑 Admin Dashboard</h2>
    <p>Welcome, {name}</p>
  </div>
);

const StudentDashboard = ({ name }) => (
  <div style={styles.dashboard}>
    <h2>🎓 Student Dashboard</h2>
    <p>Welcome, {name}</p>
  </div>
);

const InstructorDashboard = ({ name }) => (
  <div style={styles.dashboard}>
    <h2>🧑‍🏫 Instructor Dashboard</h2>
    <p>Welcome, {name}</p>
  </div>
);

/* ----- Styles ----- */

const styles = {
  container: {
    width: "350px",
    margin: "60px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
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
  dashboard: {
    margin: "60px auto",
    textAlign: "center",
  },
};

export default Login;
