import React, { useEffect, useState } from "react";
import axios from "axios";
import selfie from "../assets/selfie.jpg";

// Hero Component
const Hero = () => {
  const [protofolio, setProtofolio] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/projects/")
      .then((response) => {
        setProtofolio(response.data.protofolio || []); // ✅ only protofolio
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {protofolio.map((p) => (
        <div
          key={p.id}
          className="bg-black text-white text-center py-12 sm:py-16 md:py-20 lg:py-24 min-h-screen flex items-center"
          id="home"
        >
          <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
            {/* Profile Image */}
            <img
              src={p.hero_img || selfie}
              alt="profile"
              className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
            />

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Liyakhat Yusuf Raza Shaik
              </span>
              , Full-Stack Developer
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Innovative Thinker && Innovative Developer
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact">
                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold">
                  Contact With Me
                </button>
              </a>
              <a href="#">
                <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
