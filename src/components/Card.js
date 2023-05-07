// import { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './card.css';

function Card(props) {
    const { rating, title, image } = props;
    // // // console.log(props)
    // const navigate = useNavigate;
    // const clickHandle = (title) => {
    //     navigate(`/movie/${title}`)
    // }
    return (
        <>
            <div className="card cardBG">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light" >
                    <img src={image} alt="ima" className="img-fluid" />
                </div>
                <div className="p-2 card-body position-relative">
                    <i className="fas fa-star text-warning mb-3"><span className="text-muted fs-6"> {rating}</span></i>
                    <h5 className="card-title text-white font-weight-bold"><span className="fs-6">{title}</span></h5>
                    <div className=''>
                        <NavLink className="btn btn-info fw-semibold w-100 mb-2" to={`/movie/${title}`}><i className="fas fa-ticket-alt"></i> Showtimes</NavLink><br />
                        <button className="btn btn-dark fw-semibold text-white w-100"><i className="fas fa-play"></i> Trailer</button>

                    </div>

                </div>
            </div>
        </>
    )
} export default Card;