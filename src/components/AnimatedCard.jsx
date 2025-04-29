import React from "react";
import { motion } from "framer-motion";

function AnimatedCard({ children }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      {children}
    </motion.div>
  );
}

export default AnimatedCard;
