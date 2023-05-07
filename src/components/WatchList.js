import Footer from "./Footer";

function WatchList() {
    return (
        <>
            <div className="bg-secondary">
                <div className="container bg-light">
                    <div className="row">
                        <div className="col-8">
                            <div className="d-flex justify-content-between p-3">
                                <div>
                                    <div>
                                        <span className="fs-3">Your Wish List</span>
                                    </div>
                                    <div className="text-muted">
                                        <i className="fas fa-lock fs-6"><span> PRIVATE</span></i>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="me-2">
                                        <div><i className="fas fa-pen"></i></div>
                                        <div><span>Edit</span></div>
                                    </div>
                                    <div>
                                        <div><i className="fas fa-share-alt"></i></div>
                                        <div><span>Share</span></div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-3 border-start">
                            <div className="mt-3 me-2">
                                <span className="fw-semibold">Create a new list</span><br />
                                <p className="mt-3 fs-6">List your movie, TV & celebrity picks.</p>
                            </div>
                            <div className="border-bottom pb-4 mb-4">
                                <span className="text-primary">Create a new list</span>
                            </div>
                            <div>
                                <span className="text-primary"><b className="text-dark">Feedback?</b> Tell us what you think about this feature</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
export default WatchList;