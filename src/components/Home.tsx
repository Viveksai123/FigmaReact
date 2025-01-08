import React from "react";

const LowerNavBar: React.FC = () => {
  return (
    <section
      className=" mt[40vh] w-[90%] h-auto relative flex justify-center items-start mt-[var(--navbar-height)] bg-white rounded-lg shadow-lg"
      style={{
        height: "calc(100vh - var(--navbar-height))", // Adjust for navbar height
      }}
    >
      {/* Content Card */}
      <div className="w-[90vw] h-[80vh] bg-white p-8 rounded-lg shadow-lg flex flex-col justify-start items-start md:justify-center relative">
        {/* Background Image inside the card */}
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            backgroundImage: "url('/background.png')", // Ensure the image path is correct
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            zIndex: 1, // Ensures the image stays behind the content
             // Optional blur effect for aesthetics
          }}
        ></div>

        {/* Card Content */}
        <div className="relative z-10 text-black">
          {/* Title */}
          <h1 className="text-black text-5xl font-bold mb-4 font-playfair animate__animated animate__bounceInLeft">Create Comfort</h1>
          {/* Subtitle */}
          <p className="text-black-100 text-lg mb-6 animate__animated animate__bounceInRight">
            Make your home look elegant
          </p>
          {/* Button */}
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all animate__animated animate__bounceInUp">
            Find more
          </button>
        </div>
      </div>
    </section>
  );
};

export default LowerNavBar;
