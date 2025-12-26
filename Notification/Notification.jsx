import React, { useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const newNotification = {
      id: Date.now(),
      message: `New alert received at ${new Date().toLocaleTimeString()}`,
      read: false,
    };

    setNotifications([newNotification, ...notifications]);
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((note) =>
        note.id === id ? { ...note, read: true } : note
      )
    );
  };

  const removeNotification = (id) => {
    setNotifications(
      notifications.filter((note) => note.id !== id)
    );
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div style={styles.container}>
      <h2>📊 Dashboard Notifications</h2>

      <button onClick={addNotification} style={styles.addBtn}>
        ➕ Add Notification
      </button>

      <p>
        🔔 Unread Notifications: <strong>{unreadCount}</strong>
      </p>

      {notifications.length === 0 ? (
        <p>No notifications yet</p>
      ) : (
        notifications.map((note) => (
          <div
            key={note.id}
            style={{
              ...styles.card,
              backgroundColor: note.read ? "#f0f0f0" : "#e3f2fd",
            }}
          >
            <p>{note.message}</p>

            <div style={styles.actions}>
              {!note.read && (
                <button
                  onClick={() => markAsRead(note.id)}
                  style={styles.readBtn}
                >
                  Mark as Read
                </button>
              )}

              <button
                onClick={() => removeNotification(note.id)}
                style={styles.deleteBtn}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    width: "450px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  },
  addBtn: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginBottom: "10px",
  },
  card: {
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
  },
  actions: {
    display: "flex",
    gap: "10px",
    marginTop: "8px",
  },
  readBtn: {
    backgroundColor: "#2196F3",
    color: "#fff",
    border: "none",
    padding: "5px",
    cursor: "pointer",
  },
  deleteBtn: {
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    padding: "5px",
    cursor: "pointer",
  },
};

export default Notifications;
