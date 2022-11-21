import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import "./documentry.css";
const DocumentryMovies = () => {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    getDocumentryMovies();
  }, []);
  const getDocumentryMovies = async () => {
    const Api_url =
      "https://api.themoviedb.org/3/discover/movie/?api_key=b6961d8a574415410005902a2f3e4d23&language=en-US&name=Music&with_genres=99";

    let res = await fetch(Api_url);
    let data = await res.json();
    setmovie(data.results);
  };

  const settings = {
    infinite: false,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <h3 className="top"> Documentary Movies</h3>
      <Slider className="amovies" {...settings}>
        {movie.map((action, id) => {
          return (
            <div className="action" key={id}>
              <img
                src={"https://image.tmdb.org/t/p/w500" + action.poster_path}
              />
              <h3 className="documentryTitle">{action.title}</h3>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default DocumentryMovies;
