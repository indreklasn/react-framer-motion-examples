import React from "react";
import { motion } from "framer-motion";

const styles = {
  background: "blue",
  borderRadius: 30,
  width: 150,
  height: 150,
  margin: "auto"
};

export const Rotate = () => (
  <motion.div
    style={styles}
    animate={{ rotate: 360 }}
    transition={{ duration: 2 }}
  />
);
