import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const params = useParams();
  const { id } = params;
  const [movie, SetMovie] = useState([]);
  useEffect(() => {
    fetch(`https://imdb-top-100-movies.p.rapidapi.com/${id}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b8af8ef2f2mshf907b12a8ececd0p1f430ejsnf6bc0ae0b4f4",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        SetMovie(data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  // console.warn(title)
  console.log(movie);
  return (
    <>
      <div className="container">
        <div>
          <header className="d-flex justify-content-end text-white fw-semibold align-items-center ">
            <span className="pe-3 border-end ">Cast & Crew</span>
            <span className="px-3 border-end">IMDb Pro</span>
            <span className="px-3 border-end">
              <i className="fas fa-grip-horizontal fs-4 me-1"> </i> All Topics
            </span>
            <span className="px-3">
              <i className="fas fa-share-alt fs-4"></i>
            </span>
          </header>
          <div className="text-white d-flex justify-content-between mt-3">
            <div>
              <span className="fs-2 fw-semibold">{movie.title}</span>
              <br />
              <span>{movie.year}</span>
            </div>
            <div className="d-flex">
              <div className="me-2 fw-semibold">
                <div>
                  <span>IMDb Rating</span>
                </div>
                <div className="text-center">
                  <i className="fas fa-star text-warning"> {movie.rating}</i>
                </div>
              </div>
              <div className="fw-semibold">
                <div>
                  <span>Your Rating</span>
                </div>
                <div className="text-center">
                  <i className="far fa-star text-primary">
                    <span className="fw-semibold"> Rate</span>
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="d-flex">
              <div className="row">
                <div className="col-12 col-sm-4 mb-n5">
                  <img
                    alt="h"
                    src={movie.image}
                    className="w-100 border h-75"
                  ></img>
                </div>
                <div className="col-12 col-sm-8">
                  <div className="border text-white pt-4 px-3 pb-4">
                    <span className="fw-semibold">
                      <span className="text-warning">Description:</span>{" "}
                      <span>{movie.description}</span>
                    </span>
                    <br />
                    <span className="fw-semibold">
                      <span className="text-warning">Director:</span>{" "}
                      <span>{movie.director}</span>
                    </span>
                    <br />
                    <span className="fw-semibold">
                      <span className="text-warning">Genre:</span>{" "}
                      <span>{movie.genre}</span>
                    </span>
                    <br />
                    <span className="fw-semibold">
                      <span className="text-warning">Writers:</span>{" "}
                      <span>{movie.writers}</span>
                    </span>
                    <br />
                    <span className="fw-semibold">
                      <span className="text-warning">Ranking:</span>{" "}
                      <span>{movie.rank}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Movie;
