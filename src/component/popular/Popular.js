import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../popular/Popular.css";
import { Link } from "react-router-dom";
const Popular = () => {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    getPopularmovies();
  }, []);

  const getPopularmovies = async () => {
    const Api_url =
      "https://api.themoviedb.org/3/movie/now_playing/?api_key=b6961d8a574415410005902a2f3e4d23&language=en-US&page=1";

    // fetch(Api_url)
    // .then(res =>res.json())
    // .then(res=>setmovies(res.results))
    // .catch(err => console.log(err))
    let res = await fetch(Api_url);
    let data = await res.json();
    setmovies(data.results);
    // console.log("./././// ", data)
  };

  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="top">
        {" "}
        <h3>Top movies</h3>
      </div>

      <Slider className="cont" {...settings}>
        {movies.map((movie, id) => {
          return (
            <div
              component={Link}
              to={`/info/${movie.id}`}
              className="demo"
              key={id}
            >
              <Link to={`/info/${movie.id}`}>
                <img
                  src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                  className="d-block w-100"
                  alt="..."
                />
              </Link>
              <div className="movieInfo">
                <h4>{movie.title}</h4>
                <h7>Rating {movie.vote_average}</h7>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Popular;
