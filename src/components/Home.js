import { useEffect, useState } from "react";
import Card from "./Card";
import PlayerModal from "./PlayerModal";

function Home() {
  const [movie, SetMovie] = useState([]);
  const [modalTrailerUrl, setModalTrailerUrl] = useState("");
  const [modalTitle, SetModalTitle] = useState("");

  const getMovies = () => {
    fetch(`https://imdb-top-100-movies.p.rapidapi.com/`, {
      method: "GET",
      headers: {
        // "X-RapidAPI-Key": "b8af8ef2f2mshf907b12a8ececd0p1f430ejsnf6bc0ae0b4f4",
        // "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
        "X-RapidAPI-Key": "e8e82b2562msh4a4d2aab55d476cp1d03cbjsndfe1e6295cf3",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        SetMovie(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovies();
  }, []);

  // console.log(movie);
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="mt-4 container-fluid">
          <span className="fw-bold text-warning fs-2">
            Explore Movies & TV Shows
          </span>
          <div className="mt-3">
            <span className="text-white border-start border-warning border-4 ps-2 fw-semibold fs-5">
              {" "}
              In theaters <i className="fas fa-angle-right"></i>
            </span>
            <br />
            <span className="text-muted fw-semibold">Show times near you</span>
          </div>
          <div className="mt-3">
            <div className="row">
              {movie.map((data, index) => (
                <div className="mt-5 col-6 col-sm-3 col-md-2" key={data.title}>
                  <Card
                    movie={data}
                    setModalTrailerUrl={setModalTrailerUrl}
                    SetModaltitle={SetModalTitle}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <PlayerModal trailer={modalTrailerUrl} title={modalTitle} />
    </>
  );
}
export default Home;
