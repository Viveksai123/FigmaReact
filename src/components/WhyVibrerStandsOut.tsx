import React from "react";
import { FaBox, FaRulerCombined, FaCheckCircle, FaPalette } from "react-icons/fa";

const WhyVibrerStandsOut = () => {
  const features = [
    {
      id: 1,
      icon: <FaBox size={40} />,
      title: "500 + Collections",
      description:
        "Our journey begins with a comprehensive understanding of your unique style and space requirements.",
    },
    {
      id: 2,
      icon: <FaRulerCombined size={40} />,
      title: "300 + Fabrics",
      description:
        "Our journey begins with a comprehensive understanding of your unique style and space requirements.",
    },
    {
      id: 3,
      icon: <FaCheckCircle size={40} />,
      title: "Top-notch Quality",
      description:
        "Our journey begins with a comprehensive understanding of your unique style and space requirements.",
    },
    {
      id: 4,
      icon: <FaPalette size={40} />,
      title: "Colour and Length Customization",
      description:
        "Our journey begins with a comprehensive understanding of your unique style and space requirements.",
    },
  ];

  return (
    <section className="bg-white py-10 px-6 flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold text-center mb-10">Why Vibrer Stands Out?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto ">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col justify-center items-center bg-gray-300 rounded-lg shadow-md p-6 animate__animated animate__slideInRight"
            style={{
              width: "438px",
              height: "320px",
            }}
          >
            <div className="mb-4 text-black opacity-90">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-center">{feature.title}</h3>
            <p className="text-center text-lg mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyVibrerStandsOut;
