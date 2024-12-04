import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="underline underline-offset-4 font-light decoration-1">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Real Stories from Those who Found Home with Us
      </p>

      <div className="flex justify-center flex-wrap gap-8">
        {testimonialsData.map((Testimonials, index) => (
          <div
            key={index}
            className="max-w-[340px] border shadow-lg rounded px-8 py-1 text-center"
          >
            <img
              className="h-20 w-20 rounded-full mx-auto mb-4"
              src={Testimonials.image}
              alt={Testimonials.alt}
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {Testimonials.name}
            </h2>
            <p className="text-gray-500 text-sm mb-4">{Testimonials.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: Testimonials.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt="Start-icon" />
              ))}
            </div>
            <p className="text-gray-600">{Testimonials.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
