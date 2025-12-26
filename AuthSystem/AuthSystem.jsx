import React, { useState } from "react";

const AuthSystem = () => {
  // Hardcoded credentials (for demo only)
  const validUser = {
    username: "admin",
    password: "12345",
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("❌ Please enter both username and password");
      return;
    }

    if (
      username === validUser.username &&
      password === validUser.password
    ) {
      setIsAuthenticated(true);
      alert("✅ Login successful!");
    } else {
      alert("❌ Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div style={styles.container}>
      {!isAuthenticated ? (
        <>
          <h2>🔑 Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />

            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>
        </>
      ) : (
        <>
          <h2>🎉 Welcome, {username}</h2>
          <p>You are authenticated.</p>

          <button onClick={handleLogout} style={styles.logoutBtn}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

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
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  logoutBtn: {
    padding: "10px",
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default AuthSystem;
