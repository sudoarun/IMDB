import { NavLink } from "react-router-dom";
import "./card.css";

function Card({ movie, setModalTrailerUrl, SetModaltitle }) {
  const { rating, title, image, id, trailer } = movie;
  return (
    <div className="card cardBG">
      <div
        className="bg-image hover-overlay ripple"
        data-mdb-ripple-color="light"
      >
        <img src={image} alt="Movie Poster" className="img-fluid" />
      </div>
      <div className="p-2 card-body position-relative">
        <i className="fas fa-star text-warning mb-3">
          <span className="text-muted fs-6"> {rating}</span>
        </i>
        <h5 className="card-title text-white font-weight-bold">
          <span className="fs-6 lineLimit">{title}</span>
        </h5>
        <div className="">
          <NavLink
            className="btn btn-info fw-semibold w-100 mb-2"
            to={`/movie/${id}`}
          >
            <i className="fas fa-ticket-alt"></i> Showtimes
          </NavLink>
          <br />
          <button
            className="btn btn-dark fw-semibold text-white w-100"
            data-mdb-toggle="modal"
            data-mdb-target="#playerModal"
            onClick={() => SetModaltitle(title) || setModalTrailerUrl(trailer)}
          >
            <i className="fas fa-play"></i> Trailer
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
