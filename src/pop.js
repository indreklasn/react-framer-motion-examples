import React from "react";
import { motion } from "framer-motion";

const styles = {
  background: "#035ee8",
  borderRadius: 30,
  width: 100,
  height: 100,
  margin: "auto"
};

export const Pop = () => (
  <motion.div
    style={styles}
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 160, 270, 360, 0],
      borderRadius: ["20%", "50%", "20%", "50%", "20%"]
    }}
    transition={{ duration: 2 }}
  />
);
