import React from "react";
import { useState,useEffect } from "react";
import "./MainCard.css"; // Importing a CSS file
 

const requestObj = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2UyYmIwZmQwODdhMTJiMjkzYTJjOTZjOWQyMDQzNiIsIm5iZiI6MTczODA0MDc1My41MjEsInN1YiI6IjY3OTg2NWIxMGEzMGQ2ZDA1OTI0MzQ4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RlY7ji1BFlmNqWkvf52NchfBCVMEjGjFBct6gWCSahw'
  }
};

function MainCard() {
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', requestObj)
      .then(res => res.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          setImage(`https://image.tmdb.org/t/p/w500${data.results[0].backdrop_path}`);
        }
        data = {
          name: "joy",
          age: 27
        }
        console.log(`hello there ${data.name}`)
        console.log(`think your age is ${data.age}`)
      })
      .catch(err => console.error('Error:', err));
  }, []); // Runs once when the component mounts

  return (
    <div className="toolbar"  style={{ backgroundImage: `url(${image})` }}>
    </div>
  );
}

export default MainCard;
