import React, { useState } from "react";

const Ecommerce = () => {
  const products = [
    { id: 1, name: "Wireless Mouse", price: 599 },
    { id: 2, name: "Keyboard", price: 899 },
    { id: 3, name: "USB Headset", price: 1299 },
    { id: 4, name: "Laptop Stand", price: 1499 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={styles.container}>
      <h2>🛍️ Product Store</h2>

      <p>
        🛒 Cart Items: <strong>{cart.length}</strong>
      </p>

      <div style={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              style={styles.button}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div style={styles.cart}>
          <h3>🧾 Cart Summary</h3>
          {cart.map((item, index) => (
            <p key={index}>
              {item.name} - ₹{item.price}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "10px",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
  },
  button: {
    padding: "8px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  cart: {
    marginTop: "20px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
  },
};

export default Ecommerce;
