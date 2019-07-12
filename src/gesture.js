import React from "react";
import { motion } from "framer-motion";

const styles = {
  background: "#7fffd4",
  borderRadius: 30,
  width: 150,
  padding: "10px 20px",
  margin: "auto",
  color: "#333",
  outline: "none",
  border: "none",
  cursor: "pointer"
};

export const Gesture = () => (
  <motion.button
    style={styles}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
  >
    Button
  </motion.button>
);
