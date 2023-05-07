function Footer() {
    return (
        <>
            {/* footer */}

            <footer className="text-center text-white">
                {/* <!-- Grid container --> */}
                <div className="container pt-4">
                    <button type='button' className='btn btn-warning text-black fw-bold'>Signin for more access</button>
                    {/* <!-- Section: Social media --> */}
                    <section className="mb-4 mt-3">
                        {/* <!-- Facebook --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-facebook-f"></i
                        ></a>

                        {/* <!-- Twitter --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-twitter"></i
                        ></a>

                        {/* <!-- Google --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-google"></i
                        ></a>

                        {/* <!-- Instagram --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-instagram"></i
                        ></a>

                        {/* <!-- Linkedin --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-linkedin"></i
                        ></a>
                        {/* <!-- Github --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>
                    {/* <!-- Section: Social media --> */}

                    <div className='container'>
                        <ul className='list-unstyled d-flex flex-row justify-content-evenly'>
                            <li>Get the IMDb App</li>
                            <li>Help</li>
                            <li>Site Index</li>
                            <li>IMDb Pro</li>
                            <li>Box Office Mojo</li>
                            <li>IMDb Developer</li>
                        </ul>

                        <ul className='list-unstyled d-flex flex-row justify-content-evenly mt-5'>
                            <li>Press Room</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Conditions of Use</li>
                            <li>Privacy Policy</li>
                            <li>Your ads Privacy Choices</li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Grid container --> */}
                <div className='text-center'>
                    <a href='2'>
                        <span>an Amazon Company</span>
                    </a>
                </div>


                {/* <!-- Copyright --> */}
                <div className="text-center p-3" >
                    © 1990 - 2023
                    <a href="https://imdb.com/"> By IMDb.com, Inc.</a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </>
    )
}
export default Footer;