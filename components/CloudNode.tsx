"use client";

import { motion } from "framer-motion";

type Props = {
  name: string;
};

const nodeVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 }
  }
};

export default function CloudNode({ name }: Props) {
  return (
    <motion.div
      variants={nodeVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      className="bg-gray-900 text-white px-6 py-3 rounded-full shadow-md cursor-pointer"
    >
      {name}
    </motion.div>
  );
}