import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ActionMovies from "../actionMovies/ActionMovies";
import "./categories.css";
const Categories = () => {
  const [genres, setgenres] = useState([]);
  const [genresId, setgenresId] = useState("");

  const getGenreslist = async () => {
    const Api_url =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=b6961d8a574415410005902a2f3e4d23";

    let res = await fetch(Api_url);
    let data = await res.json();
    setgenres(data.genres);
    setgenresId(data.genres[0].id);
    // console.log("./././././", genres);
  };
  // console.log(genres);

  useEffect(() => {
    getGenreslist();
  }, []);
  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 7,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  const handleGenresChange = (id) => {
    setgenresId(id);
  };

  return (
    <>
      <div className="top">
        <h3>Categories</h3>
      </div>

      <Slider className="genres" {...settings}>
        {genres.map((genre, id) => {
          return (
            <>
              <div>
                <h5
                  className="genreList"
                  onClick={() => handleGenresChange(genre.id)}
                >
                  {genre.name}
                </h5>
              </div>
            </>
          );
        })}
      </Slider>
      <ActionMovies id={genresId} />
    </>
  );
};

export default Categories;
