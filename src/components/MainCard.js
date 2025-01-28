import React from "react";

const requestObj = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2UyYmIwZmQwODdhMTJiMjkzYTJjOTZjOWQyMDQzNiIsIm5iZiI6MTczODA0MDc1My41MjEsInN1YiI6IjY3OTg2NWIxMGEzMGQ2ZDA1OTI0MzQ4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RlY7ji1BFlmNqWkvf52NchfBCVMEjGjFBct6gWCSahw'
  }
};

function fetchTopRatedMovies() {
  return new Promise((resolve, reject) => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', requestObj)
      .then(res => {
        if (!res.ok) {
          reject('Failed to fetch data');
        } else {
          resolve(res.json());
        }
      })
      .catch(err => reject(err));
  });
}

let image = "https://image.tmdb.org/t/p/w500"
fetchTopRatedMovies()
  .then(data => {
    console.log('Top Rated Movies:', data);
    image = image + data["results"][0]["backdrop_path"]
    console.log(image)
  })
  .catch(err => {
    console.error('Error:', err);
  });

function MainCard() {
  return (
    <div className="toolbar">
      <img src = {image}></img>
      {/* Add navigation items like search or profile here */}
    </div>
  );
}

export default MainCard;
