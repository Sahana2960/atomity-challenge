"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  value: number;
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

export default function ResourceCard({ title, value }: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 800;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ scale: 1.05 }}
      className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition"
    >
      <h3 className="text-lg font-semibold mb-3 text-black">
        {title}
      </h3>

      <p className="text-4xl font-bold text-green-600">
        {count}%
      </p>
    </motion.div>
  );
}