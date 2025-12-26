import React, { useState } from "react";

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    age: "",
    bio: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!profile.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!profile.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(profile.email)) {
      newErrors.email = "Invalid email format";
    }

    if (profile.age && (profile.age < 1 || profile.age > 120)) {
      newErrors.age = "Age must be between 1 and 120";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    alert("✅ Profile updated successfully!");
  };

  return (
    <div style={styles.container}>
      <h2>🛠️ Edit Profile</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={profile.name}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.name && <p style={styles.error}>{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={profile.email}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.email && <p style={styles.error}>{errors.email}</p>}

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={profile.age}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.age && <p style={styles.error}>{errors.age}</p>}

        <textarea
          name="bio"
          placeholder="Short Bio"
          value={profile.bio}
          onChange={handleChange}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>
          Save Changes
        </button>
      </form>
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
    marginTop: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "5px",
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
  error: {
    color: "red",
    fontSize: "13px",
    marginBottom: "8px",
  },
};

export default UserProfile;
