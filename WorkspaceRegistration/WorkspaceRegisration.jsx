import React, { useState } from "react";

const WorkshopRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workshop: "",
    mode: "",
  });

  const workshops = [
    "AI & Machine Learning",
    "Web Development",
    "Cloud Computing",
    "Cyber Security",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.workshop ||
      !formData.mode
    ) {
      alert("Please fill all the fields");
      return;
    }

    alert("✅ Workshop Registered Successfully!");
  };

  return (
    <div style={styles.container}>
      <h2>📝 Workshop Registration</h2>

      <div style={styles.layout}>
        {/* Registration Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />

          <select
            name="workshop"
            value={formData.workshop}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Select Workshop</option>
            {workshops.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            name="mode"
            value={formData.mode}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Mode of Attendance</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>

          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>

        {/* Live Preview */}
        <div style={styles.preview}>
          <h3>🔍 Live Preview</h3>
          <p><strong>Name:</strong> {formData.name || "-"}</p>
          <p><strong>Email:</strong> {formData.email || "-"}</p>
          <p><strong>Workshop:</strong> {formData.workshop || "-"}</p>
          <p><strong>Mode:</strong> {formData.mode || "-"}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "700px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  },
  layout: {
    display: "flex",
    gap: "20px",
  },
  form: {
    flex: 1,
  },
  preview: {
    flex: 1,
    padding: "15px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
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
};

export default WorkshopRegistration;
