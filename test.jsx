import React, { useState } from 'react';

const Test = () => {
  const [jobProfessions, setJobProfessions] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const selectedValues = {};
    for (let [name, value] of formData.entries()) {
      if (selectedValues[name]) {
        selectedValues[name].push(value);
      } else {
        selectedValues[name] = [value];
      }
    }

    let professions = [];

    // Logic for each question based on selected values
    // Example for Question 1
    if (selectedValues['question'] && selectedValues['question'].includes('A')) {
      professions.push('Social Sciences related professions');
    }
    if (selectedValues['question'] && selectedValues['question'].includes('B')) {
      professions.push('Science and Humanities related professions');
    }
    // Add logic for other options in Question 1

    // Continue the logic for each question (2 to 3)

    if (professions.length === 0) {
      professions.push('Sorry, we couldn\'t determine job professions based on your answers.');
    }

    setJobProfessions(professions);
  };

  return (
    <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
      <h2 className="text-2xl font-medium mb-4">Major Test</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Add HTML structures for each question */}
        {/* Example for Question 1 */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">1. What subjects or fields do you enjoy the most?</label>
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-1/3">
              <label htmlFor="A" className="block text-gray-700 font-medium mb-2">
                <input type="checkbox" id="A" name="question" value="A" className="mr-2" />
                Social Sciences
              </label>
            </div>
            {/* Add similar structures for other options in Question 1 */}
          </div>
        </div>
        
        {/* Add similar structures for Questions 2 and 3 */}
        {/* ... */}

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>

      {/* Display job professions */}
      <div className="mt-4">
        <h3 className="text-lg font-medium mb-2">Potential Job Professions</h3>
        <ul>
          {jobProfessions.map((profession, index) => (
            <li key={index}>{profession}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Test;
