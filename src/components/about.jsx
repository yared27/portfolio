import React from 'react';

const About = () => {
  return (
    <section 
      id='about' 
      className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-12 md:py-24 mx-auto flex items-center"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto w-full">
        {/* Text Content (Left Side) */}
        <div className="lg:w-1/2 order-2 lg:order-1 mt-8 lg:mt-0">
          <h2 className="text-3xl sm:text-4xl font-light text-yellow-500 mb-6">
            About Me
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-6">
            I am a passionate web developer with a strong foundation in HTML, CSS, and JavaScript.
            I love creating beautiful and functional websites that provide great user experiences.
          </p>
          <p className="text-gray-400 text-base sm:text-lg mb-8 lg:mb-0">
            My journey in web development started as a hobby, and it has now become my profession.
            I enjoy learning new technologies and keeping up with the latest trends in the industry.
          </p>
        </div>

        {/* Right Side (Image or Additional Content) */}
        <div className="lg:w-1/2 order-1 lg:order-2 flex items-center justify-center">
          <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md">
            <p className="text-gray-300 text-lg text-center sm:text-left text-yellow-500 hover:scale-105 transition-transform duration-300">
              Let's connect and create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;