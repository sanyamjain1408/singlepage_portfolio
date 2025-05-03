import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Hello everyone, I'm Sanyam Jain,
            </h2>
            <p className="mt-6 text-gray-600">
              A B.Tech student specializing in Computer Science Engineering at Parul University.
              I have a strong command of Full-Stack Web Development and UI/UX design, allowing
              me to create visually appealing and highly functional websites.
            </p>
            <p className="mt-4 text-gray-600">
              My technical expertise includes HTML, CSS, Tailwind, JavaScript, React, MongoDB,
              and API testing using Postman. Additionally, I am proficient in Figma for UI/UX
              design and have a deep understanding of both frontend and backend development.
            </p>
            <p className="mt-4 text-gray-600">
              I have also gained practical experience as a UI/UX Designer intern at Fuel Flex
              Company, where I worked on designing intuitive and user-friendly digital
              interfaces. With my skills and hands-on experience, I can efficiently develop,
              optimize, and enhance web applications to deliver a seamless user experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
