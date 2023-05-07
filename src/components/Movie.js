import { useParams } from "react-router-dom";

function Movie() {
    const params = useParams();
    const { title } = params;
    // console.warn(title)
    return (
        <>
            <div className="container">
                <div>
                    <header className="d-flex justify-content-end text-white fw-semibold align-items-center">
                        <span className="pe-3 border-end">Cast & Crew</span>
                        <span className="px-3 border-end">IMDb Pro</span>
                        <span className="px-3 border-end"><i className="fas fa-grip-horizontal fs-4 me-1"> </i> All Topics</span>
                        <span className="px-3"><i className="fas fa-share-alt fs-4"></i></span>
                    </header>
                    <div className="text-white d-flex justify-content-between mt-3">
                        <div>
                            <span className="fs-2 fw-semibold">{title}</span><br />
                            <span>2023</span>
                        </div>
                        <div className="d-flex">
                            <div className="me-2 fw-semibold">
                                <div>
                                    <span>IMDb Rating</span>
                                </div>
                                <div className="text-center">
                                    <i className="fas fa-star text-warning"> 8.6</i>
                                </div>
                            </div>
                            <div className="fw-semibold">
                                <div>
                                    <span>Your Rating</span>
                                </div>
                                <div className="text-center">
                                    <i className="far fa-star text-primary"><span className="fw-semibold"> Rate</span></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex">
                            <div className="row">
                                <div className="col-6">
                                    <img alt="h" src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg" className="w-100 border"></img>
                                </div>
                                <div className="col-6">
                                    <div className="border text-white pt-4 px-3 pb-4">
                                        <span className="fw-semibold">Description: <span>Hello</span></span><br />
                                        <span className="fw-semibold">Director: <span>Hello</span></span><br />
                                        <span className="fw-semibold">Genre: <span>Hello</span></span><br />
                                        <span className="fw-semibold">Writers: <span>Hello</span></span><br />
                                        <span className="fw-semibold">Genre: <span>Hello</span></span>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Movie;