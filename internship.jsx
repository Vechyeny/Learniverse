import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase.config';
import { useNavigate } from 'react-router-dom';

function Internship() {
const [authorList, setAuthorList] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const value = collection(db, "internship");
    const getAuthors = async () => {
      try {
        const authVal = await getDocs(value);
        const authors = authVal.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setAuthorList(authors);
      } catch (error) {
        console.error("Error fetching authors:", error.message);
      }
    };
    getAuthors();
  }, []);
  

  const handleReadNowClick = (author) => {
    setSelectedBook(author);
    navigate("/info", { state: { selectedBook: author } });
  };


  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:px-16 sm:shadow-sm dark:bg-transparent">
        <p className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
          What are you looking for?
        </p>

        <form action="/search">
          <label
            className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
            htmlFor="search-bar"
          >
            <input
              id="search-bar"
              placeholder="your keyword here"
              name="q"
              className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
              required=""
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
            >
              <div className="flex items-center transition-all opacity-1">
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  Search
                </span>
              </div>
            </button>
          </label>
        </form>

        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7"></circle>
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#3b82f6"></stop>
              <stop offset="1" stopColor="#1d4ed8"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Selected Internships Position</h1>
      </div>

      <div className="flex flex-wrap items-start justify-center p-5 py-10">
        <a
          className=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
          href="https://tailwindflex.com/tag/card"
        >
          <span className="text-sm">latest</span>
        </a>
        <a
          className=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
          href="https://tailwindflex.com/tag/call-to-action"
        >
          <span className="text-sm">Popular</span>
        </a>
        <a
          className=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
          href="https://tailwindflex.com/tag/carousel"
        >
          <span className="text-sm">High-paying</span>
        </a>
      </div>
    
      <div className="flex flex-wrap">
  {authorList.map((author) => (
    <div key={author.id} className="py-16 flex flex-wrap">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">{author.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative overflow-hidden">
              <img className="object-cover w-full h-full" src={author.image} alt={author.name} />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button onClick={() => handleReadNowClick(author)} className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">More Information</button>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-4">Computer Science </h3>
            <p className="text-gray-500 text-sm mt-2">Salary : 500$</p>
            <p className="text-gray-500 text-sm mt-2">location : Toul Kork, Phnom Penh</p>
            <div className="flex items-center justify-between mt-4">
             
              <button  className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


        </div>
  );
}

export default Internship;
