import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      id="About"
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        {/* div-1 */}
        <img
          src={assets.brand_img}
          alt="Brand-Img"
          className="w-full sm:w-1/2 max-w-lg"
        />
        {/* div-2 */}
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-32">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Deivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            natus doloremque optio facere numquam maiores doloribus, et
            blanditiis, quae explicabo porro, repellat aut quasi ullam?
            Exercitationem, nam. Quam, quod ut.
          </p>
          <button className="text-white bg-blue-600 px-8 py-2 rounded">
            Learn More
          </button>
        </div>
        {/*div-2 End  */}
      </div>
    </div>
  );
};

export default About;