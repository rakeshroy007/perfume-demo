import React from "react";

const OurBrands = () => {
  return (
    <div className="text-center py-10 bg-gradient-to-b from-gray-50 to-gray-200">
      {/* Section Heading */}
      <h3 className="text-2xl font-extrabold text-gray-800 tracking-widest uppercase mb-6">
        Our Brands
      </h3>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center mx-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={`/brand_${index + 1}.webp`}
              alt={`Brand ${index + 1}`}
              className="w-[120px] h-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBrands;
