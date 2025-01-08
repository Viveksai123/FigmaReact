import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const InteriorDesigning: React.FC = () => {
  const images = [
    "https://s3-alpha-sig.figma.com/img/9227/9255/4626d841074865d5367279bf8cbe986b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kpLeQA-EFprZ7BNyCx6sMHr-sFLvfCAPuynNUQTrg7af10Ur-qXi738ME5y1HZTOyhJN8cJkgW-Je0ewDgHX4ahkVOfuOqRPhfSjqr5DxvBn3HCq1M16lOaKh4grut1wXblxeJoz9SVtfvEnjd-iE1TgJIjfRJ8gweZlzmfrorBL9EsF680GsuvmrhOO32ptwKa9MalG-OnwCRUCVFp7z23LhwlcbirBTa8aTeu75ZclxHnYUms65PM03EnjJfYJ6zcNALll2SBbcfpXUlfHVsXq-nS4nMzQEQVWjFSNhXBpFYEdhqsD6MNatn5h9orCbbArWLf-t6vLaimZoS~K3A__",
    "https://via.placeholder.com/993x486?text=Interior+Design+2",
    "https://via.placeholder.com/993x486?text=Interior+Design+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="relative bg-[#D3D3D3] flex flex-col items-center justify-center px-8 py-12 mt-6 md-6"
      style={{ width: "100%", height: "743px" }}
    >
      {/* Text Section */}
      <div className="text-center max-w-2xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 animate__animated animate__slideInRight">Interior Designing</h2>
        <p className="text-gray-600 mb-6 animate__animated animate__slideInLeft">
          Kitchen Interior - Let us help you design your kitchen. Leave the worry of mixing
          and matching furniture behind. Set up your space confidently by purchasing the
          complete look for a seamless experience.
        </p>
        <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition">
          Know More
        </button>
      </div>

      {/* Carousel Section */}
      <div className="relative mt-8 flex items-center w-full justify-center align-center animate__animated animate__slideInUp">
        {/* Left Arrow */}
        <button
          className="absolute -left-6 bg-gray-300 hover:bg-gray-400 ml-8 rounded-full z-10"
          onClick={handlePrev}
        >
          <FaChevronLeft className="text-gray-700 w-5 h-5" />
        </button>

        {/* Images */}
        <div className="w-[80vw] h-[486px] overflow-hidden rounded-lg shadow-lg ">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${images.length * 100}%`,
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Interior Design ${index + 1}`}
                className="w-full h-[486px] object-cover"
              />
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="absolute -right-6 bg-gray-300 hover:bg-gray-400 mr-8 rounded-full  z-10"
          onClick={handleNext}
        >
          <FaChevronRight className="text-gray-700 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default InteriorDesigning;
