import React, { useState } from "react";
import { assets, projectsData } from "../assets/assets";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };
  return (
    <div
      className="container mx-auto pt-20 py-4 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Project"
    >
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-2">
        Projects
        <span className="underline underline-offset-4 font-light decoration-1">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 mx-auto max-w-80">
        Crafting Spaces, Building legacies-Explore our Portfolio
      </p>

      {/* slide buttons  */}

      <div className="flex  justify-end items-center">
        <button
          className="rounded mr-2 p-3 bg-gray-200"
          aria-label="Previous Project"
          onClick={prevProject}
        >
          <img src={assets.left_arrow} alt="Left-Arrow" />
        </button>
        <button
          className="rounded mr-2 p-3 bg-gray-200"
          aria-label="Next Project"
          onClick={nextProject}
        >
          <img src={assets.right_arrow} alt="Right-Arrow" />
        </button>
      </div>

      {/* Project slider container  */}

      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out mt-6"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md ">
                  <h2 className="text-xl text-gray-800 font-semibold">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price}
                    <span>|</span>
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
