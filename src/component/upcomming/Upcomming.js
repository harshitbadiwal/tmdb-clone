import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const HorrerMovies = () => {
  const [comming, setcomming] = useState([]);
  useEffect(() => {
    getHorrerMovies();
  }, []);
  const getHorrerMovies = async () => {
    const Api_url =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=b6961d8a574415410005902a2f3e4d23&language=en-US&name=Music&with_genres=27";

    let res = await fetch(Api_url);
    let data = await res.json();
    setcomming(data.results);
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
      <h3 className="top"> Upcomming Movies</h3>
      <Slider className="amovies" {...settings}>
        {comming.map((comming, id) => {
          return (
            <div className="action" key={id}>
              <Link to={`/info/${comming.id}`}>
                <img
                  src={"https://image.tmdb.org/t/p/w500" + comming.poster_path}
                />
              </Link>
              <h3 className="actionTitle">{comming.title}</h3>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default HorrerMovies;
