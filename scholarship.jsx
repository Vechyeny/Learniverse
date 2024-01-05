import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from "../../Firebase.config"
import { useNavigate } from 'react-router-dom';


const Scholarship = () => {
const [authorList, setAuthorList] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const value = collection(db, "scholarship");
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
        <div>
        {authorList.map((author) => (
        <div key={author.id}>
            <h2>{author.name}</h2>
            
            <img src={author.image} alt={author.name} />
            {/* Other fields from the 'author' object */}
            <button onClick={() => handleReadNowClick(author)}>Read Now</button>
        </div>
        ))}
        </div>
    )
}

export default Scholarship;