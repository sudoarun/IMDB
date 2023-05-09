import { useState } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function SignIn({ SetLogIn }) {
  const redirect = useNavigate();
  const [password, Setpassword] = useState("");
  const handleSignIn = () => {
    if (password === "123") {
      SetLogIn(true);
      console.log("User Logged In");
      // return <Navigate to="/produtcs" />;
      redirect("/");
      alert("Admin Logged In");
    } else {
      alert("Please enter Correct password");
    }
  };
  return (
    <>
      <div className="container h-100">
        <div className="bg-white text-black ps-5 h-100 pb-5 pt-3">
          <div className="row">
            <div className="col-6">
              <div className="mt-3">
                <h4 className="text-center fw-semibold fs-4">Sign in</h4>
                <div className="mt-4 w-50 mx-auto">
                  <form>
                    <button className="form-control mb-2" type="submit">
                      <i className="fab fa-imdb text-warning"></i>Signin with
                      IMDb
                    </button>
                    {/* <input
                      type={"text"}
                      className="form-control mb-2"
                      placeholder="Enter Username"
                      onChange={(e) => SetUserName(e.target.value)}
                    /> */}
                    <input
                      type={"Password"}
                      className="form-control mb-2"
                      placeholder="Enter Password"
                      onChange={(e) => Setpassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="btn btn-warning btn-block mb-4 text-black fw-semibold"
                      onClick={handleSignIn}
                    >
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-6 border-start pb-5">
              <div className="mt-3">
                <h4 className="fw-semibold fs-4 mb-3">
                  Benefits of your free IMDb account
                </h4>
                <div className="ms-2">
                  <h6 className="fw-semibold" style={{ marginBottom: "1px" }}>
                    Personalized Recommendations
                  </h6>
                  <span>Discover shows you'll love.</span>
                  <h6
                    className="fw-semibold pt-2"
                    style={{ marginBottom: "1px" }}
                  >
                    Your Watchlist
                  </h6>
                  <span className="fs-6">
                    Track everything you want to watch and receive e-mail when
                    movies open in theaters.
                  </span>
                  <h6
                    className="fw-semibold pt-2"
                    style={{ marginBottom: "1px" }}
                  >
                    Your Ratings
                  </h6>
                  <span>Rate and remember everything you've seen</span>
                  <h6
                    className="fw-semibold pt-2"
                    style={{ marginBottom: "1px" }}
                  >
                    Contribute to IMDb
                  </h6>
                  <span>
                    Add data that will be seen by millions of people and get
                    cool badges.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default SignIn;
