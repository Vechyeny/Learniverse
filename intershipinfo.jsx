// AuthorInfo.js
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Intershipinfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedBook } = location.state || {};
  const [showFullDecs, setShowFullDecs] = useState(false);
  const [showPersonality, setShowPersonality] = useState(false);

  if (!selectedBook) {
    return <div>No author information available.</div>;
  }

  const { Dateline, Duration, description, image,} = selectedBook;

  const togglePersonalityVisibility = () => {
    setShowPersonality(!showPersonality);
    setShowFullDecs(false); // Close Decs section when toggling Personality
  };

  const handleBackClick = () => {
    navigate("/internship");
  };

  return (
    <div className="w-full h-[970px] overflow-y-auto">
      <div className="max-w-5xl mx-auto p-4 mt-8 mb-8 ">
      <button
        onClick={handleBackClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded 
        transition duration-300 ease-in-out focus:outline-none"
      >
        Back
      </button>
        <div className="flex items-center justify-center h-full mb-6 ">
          <p className="text-center text-5xl py-16 font-bold text-green-800 book-title">អ្នកនិពន្ធ</p>
        </div>

        <img src={image} alt="" className="w-[500px] h-[500px] mx-auto mb-4 rounded-lg shadow-lg" />
        <div className="flex justify-center space-x-20">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-full focus:outline-none mb-2 
          transition-all duration-300 ease-in-out transform hover:scale-105 active:bg-blue-600"
            onClick={togglePersonalityVisibility}
          >
            Personality
          </button>
        </div>

        {showPersonality && (
          <div className="p-4 rounded-md bg-gray-100">
            <h2 className="text-2xl font-bold mb-2 book-title">ឈ្មោះ: {Dateline}</h2>
            <p className="mb-2 book-title ">ភេទ: {Duration}</p>
            <p className="mb-2 book-title ">ថ្ងៃខែឆ្នាំកំណើត: {description}</p>

            {showFullDecs ? <p>{description}</p> : <p className="mb-2 book-decs">{description}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Intershipinfo;