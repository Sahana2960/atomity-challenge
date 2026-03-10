"use client";

import { motion } from "framer-motion";
import { useApiData } from "../hooks/useApiData";
import ResourceCard from "./ResourceCard";
import CloudNode from "./CloudNode";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const metrics = ["CPU Usage", "RAM Usage", "Storage", "Network"];

export default function FeatureSection() {
  const { data, isLoading } = useApiData();

  if (isLoading) return <p className="text-center mt-10">Loading metrics...</p>;

  return (
    <section className="max-w-6xl mx-auto py-20 px-6 relative">

      {/* Glow background */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[500px] h-[300px] bg-green-200 blur-[120px] opacity-30 rounded-full"></div>
      </div>

      {/* Heading */}
      <h2
        className="text-center font-bold mb-6 text-black"
        style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
      >
        Optimize Cloud Infrastructure
      </h2>

      <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
        Monitor and optimize resources across multiple cloud providers
        with real-time infrastructure insights.
      </p>

      {/* Cloud Providers */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap">
        <CloudNode name="AWS" />
        <CloudNode name="Azure" />
        <CloudNode name="GCP" />
        <CloudNode name="On-Prem" />
      </div>

      {/* Optimization Engine */}
      <div className="relative flex justify-center mb-16">

        <div className="absolute top-0 w-[2px] h-16 bg-gray-300"></div>

        <div className="bg-white shadow-xl px-8 py-5 rounded-xl text-center z-10">
          <h3 className="font-semibold text-gray-800">
            Optimization Engine
          </h3>
          <p className="text-sm text-gray-500">
            Real-time resource analysis
          </p>
        </div>

      </div>

      {/* Resource Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-4 gap-6 md:grid-cols-2 sm:grid-cols-1"
      >
        {metrics.map((metric, index) => (
          <ResourceCard
            key={index}
            title={metric}
            value={Math.floor(Math.random() * 90) + 10}
          />
        ))}
      </motion.div>

    </section>
  );
}