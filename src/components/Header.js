import { NavLink } from "react-router-dom";

function Header({ SetLogIn, logIn }) {
  const signHandle = () => {
    SetLogIn(false);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to={"/"} className="navbar-brand">
          <svg
            id="home_img"
            className=""
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="32"
            viewBox="0 0 64 32"
            version="1.1"
          >
            <g fill="#F5C518">
              <rect x="0" y="0" width="100%" height="100%" rx="4"></rect>
            </g>
            <g
              transform="translate(8.000000, 7.000000)"
              fill="#000000"
              fillRule="nonzero"
            >
              <polygon points="0 18 5 18 5 0 0 0"></polygon>
              <path d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path>
              <path d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path>
              <path d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path>
            </g>
          </svg>
        </NavLink>
        <a
          className="navbar-brand text-white fw-semibold"
          href="1"
          data-mdb-toggle="modal"
          data-mdb-target="#menuModal"
        >
          <i className="fas fa-bars pe-2"></i>
          <span className="fs-6">Menu</span>
        </a>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="1navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form
            className="d-flex me-auto align-items-center w-75"
            role="search"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <a href="0">
              <svg
                className="text-white navbar__imdbpro-menu-toggle__name"
                width="52"
                height="14"
                viewBox="0 0 52 14"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
              >
                <g fill="currentColor">
                  <rect x="0" y="1" width="3.21" height="12.34"></rect>
                  <path d="M10,1 L9.3,6.76 L8.84,3.63 C8.7,2.62 8.58,1.75 8.45,1 L4.3,1 L4.3,13.34 L7.11,13.34 L7.11,5.19 L8.3,13.34 L10.3,13.34 L11.42,5 L11.42,13.33 L14.22,13.33 L14.22,1 L10,1 Z"></path>
                  <path d="M19.24,3.22 C19.3711159,3.29185219 19.4602235,3.42180078 19.48,3.57 C19.5340993,3.92393477 19.554191,4.28223587 19.54,4.64 L19.54,9.42 C19.578852,9.92887392 19.5246327,10.4405682 19.38,10.93 C19.27,11.12 18.99,11.21 18.53,11.21 L18.53,3.11 C18.7718735,3.09406934 19.0142863,3.13162626 19.24,3.22 Z M19.24,13.34 C19.8163127,13.3574057 20.3928505,13.3138302 20.96,13.21 C21.3245396,13.1481159 21.6680909,12.9969533 21.96,12.77 C22.2288287,12.5438006 22.4209712,12.2398661 22.51,11.9 C22.643288,11.1679419 22.6969338,10.4236056 22.67,9.68 L22.67,5.34 C22.6662002,4.55669241 22.6060449,3.77467335 22.49,3 C22.43037,2.59841431 22.260779,2.22116094 22,1.91 C21.6636187,1.56093667 21.2326608,1.317654 20.76,1.21 C19.7709421,1.02848785 18.7647002,0.958050915 17.76,1 L15.32,1 L15.32,13.34 L19.24,13.34 Z"></path>
                  <path d="M27.86,10.34 C27.8769902,10.7218086 27.8501483,11.1043064 27.78,11.48 C27.72,11.63 27.46,11.71 27.26,11.71 C27.0954951,11.7299271 26.9386363,11.6349863 26.88,11.48 C26.7930212,11.1542289 26.7592527,10.8165437 26.78,10.48 L26.78,7.18 C26.7626076,6.84408875 26.7929089,6.50740774 26.87,6.18 C26.9317534,6.03447231 27.0833938,5.94840616 27.24,5.97 C27.43,5.97 27.7,6.05 27.76,6.21 C27.8468064,6.53580251 27.8805721,6.87345964 27.86,7.21 L27.86,10.34 Z M23.7,1 L23.7,13.34 L26.58,13.34 L26.78,12.55 C27.0112432,12.8467609 27.3048209,13.0891332 27.64,13.26 C28.0022345,13.4198442 28.394069,13.5016184 28.79,13.5 C29.2588971,13.515288 29.7196211,13.3746089 30.1,13.1 C30.4399329,12.8800058 30.6913549,12.5471372 30.81,12.16 C30.9423503,11.6167622 31.0061799,11.0590937 31,10.5 L31,7 C31.0087531,6.51279482 30.9920637,6.02546488 30.95,5.54 C30.904474,5.28996521 30.801805,5.05382649 30.65,4.85 C30.4742549,4.59691259 30.2270668,4.40194735 29.94,4.29 C29.5869438,4.15031408 29.2096076,4.08232558 28.83,4.09 C28.4361722,4.08961884 28.0458787,4.16428368 27.68,4.31 C27.3513666,4.46911893 27.0587137,4.693713 26.82,4.97 L26.82,1 L23.7,1 Z"></path>
                </g>
                <g fill="#33C5F3">
                  <path d="M32.13,1 L35.32,1 C35.9925574,0.978531332 36.6650118,1.04577677 37.32,1.2 C37.717112,1.29759578 38.0801182,1.50157071 38.37,1.79 C38.6060895,2.05302496 38.7682605,2.37391646 38.84,2.72 C38.935586,3.27463823 38.9757837,3.8374068 38.96,4.4 L38.96,5.46 C38.9916226,6.03689533 38.9100917,6.61440551 38.72,7.16 C38.5402933,7.53432344 38.2260614,7.82713037 37.84,7.98 C37.3049997,8.18709035 36.7332458,8.28238268 36.16,8.26 L35.31,8.26 L35.31,13.16 L32.13,13.16 L32.13,1 Z M35.29,3.08 L35.29,6.18 L35.53,6.18 C35.7515781,6.20532753 35.9725786,6.12797738 36.13,5.97 C36.2717869,5.69610033 36.3308522,5.38687568 36.3,5.08 L36.3,4.08 C36.3390022,3.79579475 36.2713114,3.5072181 36.11,3.27 C35.8671804,3.11299554 35.5771259,3.04578777 35.29,3.08 Z"></path>
                  <path d="M42,4.36 L41.89,5.52 C42.28,4.69 43.67,4.42 44.41,4.37 L43.6,7.3 C43.2290559,7.27725357 42.8582004,7.34593052 42.52,7.5 C42.3057075,7.61238438 42.1519927,7.81367763 42.1,8.05 C42.0178205,8.59259006 41.9843538,9.14144496 42,9.69 L42,13.16 L39.34,13.16 L39.34,4.36 L42,4.36 Z"></path>
                  <path d="M51.63,9.71 C51.6472876,10.3265292 51.6003682,10.9431837 51.49,11.55 C51.376862,11.9620426 51.1639158,12.3398504 50.87,12.65 C50.5352227,13.001529 50.1148049,13.2599826 49.65,13.4 C49.0994264,13.5686585 48.5257464,13.6496486 47.95,13.64 C47.3333389,13.6524659 46.7178074,13.5818311 46.12,13.43 C45.6996896,13.322764 45.3140099,13.1092627 45,12.81 C44.7275808,12.5275876 44.5254637,12.1850161 44.41,11.81 C44.2627681,11.2181509 44.1921903,10.6098373 44.2,10 L44.2,7.64 C44.1691064,6.9584837 44.2780071,6.27785447 44.52,5.64 C44.7547114,5.12751365 45.1616363,4.71351186 45.67,4.47 C46.3337168,4.13941646 47.0688388,3.97796445 47.81,4 C48.4454888,3.98667568 49.0783958,4.08482705 49.68,4.29 C50.1352004,4.42444561 50.5506052,4.66819552 50.89,5 C51.1535526,5.26601188 51.3550281,5.58700663 51.48,5.94 C51.6001358,6.42708696 51.6506379,6.92874119 51.63,7.43 L51.63,9.71 Z M48.39,6.73 C48.412199,6.42705368 48.3817488,6.12255154 48.3,5.83 C48.2091142,5.71223121 48.0687606,5.64325757 47.92,5.64325757 C47.7712394,5.64325757 47.6308858,5.71223121 47.54,5.83 C47.447616,6.12046452 47.4136298,6.42634058 47.44,6.73 L47.44,10.93 C47.4168299,11.2204468 47.4508034,11.5126191 47.54,11.79 C47.609766,11.9270995 47.7570827,12.0067302 47.91,11.99 C48.0639216,12.0108082 48.2159732,11.9406305 48.3,11.81 C48.3790864,11.5546009 48.4096133,11.2866434 48.39,11.02 L48.39,6.73 Z"></path>
                </g>
              </svg>
            </a>
          </form>
          <ul className="navbar-nav  mb-2 mb-lg-0 border-start me-3">
            <li className="nav-item ms-3">
              <NavLink
                to={"/watchlist"}
                className="nav-link active fw-semibold text-white"
                aria-current="page"
                href="1"
              >
                <i className="fas fa-bookmark"></i> Wishlist
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link fw-semibold text-white" href="1">SignIn</a>
              {SetLogIn ? (
                <span
                  className="nav-link fw-semibold text-white"
                  onClick={signHandle}
                >
                  Admin
                </span>
              ) : (
                <NavLink
                  to={"/signin"}
                  className="nav-link fw-semibold text-white"
                >
                  SignIn
                </NavLink>
              )}
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-semibold text-white"
                href="1"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user">{!logIn ? "User" : "Admin"}</i>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start"
                style={{ marginLeft: "-130px", background: "black" }}
              >
                <li>
                  <a className="dropdown-item text-white" href="1">
                    Account Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-white" href="1">
                    User Settings
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-white"
                    href="."
                    onClick={signHandle}
                  >
                    Sign Out
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-semibold text-white"
                href="1"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                EN
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start"
                style={{ marginLeft: "-130px", background: "black" }}
              >
                <li>
                  <a className="dropdown-item text-white" href="1">
                    English
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-white" href="1">
                    Hindi
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-white" href="1">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* modal  */}

      <div
        className="modal fade"
        id="menuModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen-xxl-down">
          <div className="modal-content bg-dark text-white">
            <div className="container p-5">
              <div className="d-flex justify-content-between">
                <div>
                  <a href="2">
                    <svg
                      className="ipc-logo drawer-logo"
                      xmlns="http://www.w3.org/2000/svg"
                      width="98"
                      height="56"
                      viewBox="0 0 64 32"
                      version="1.1"
                    >
                      <g fill="#F5C518">
                        <rect
                          x="0"
                          y="0"
                          width="100%"
                          height="100%"
                          rx="4"
                        ></rect>
                      </g>
                      <g
                        transform="translate(8.000000, 7.000000)"
                        fill="#000000"
                        fillRule="nonzero"
                      >
                        <polygon points="0 18 5 18 5 0 0 0"></polygon>
                        <path d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path>
                        <path d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path>
                        <path d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path>
                      </g>
                    </svg>
                  </a>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn-close bg-warning p-3 rounded-circle"
                    data-mdb-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-4">
                  <span>
                    <label className="d-flex">
                      <span className="me-4 fs-4">
                        <i className="fas fa-film text-warning"></i>
                      </span>
                      <span className="fw-bold fs-4">Movies</span>
                    </label>
                  </span>
                  <div>
                    <div>
                      <ul className="list-unstyled mx-5">
                        <li className="mt-2 mb-2">Release Calender</li>
                        <li className="mt-2 mb-2">Top 250 Movies</li>
                        <li className="mt-2 mb-2">Most popular Movies</li>
                        <li className="mt-2 mb-2">Top Box Office</li>
                        <li className="mt-2 mb-2">Movie News</li>
                        <li className="mt-2 mb-2">India Movies Spotlight</li>
                        <li className="mt-2 mb-2">Show Times & Tickets</li>
                        <li className="mt-2 mb-2">Browse Movie By Genres</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <span>
                    <label className="d-flex">
                      <span className="me-4 fs-4">
                        <i className="fas fa-tv text-warning"></i>
                      </span>
                      <span className="fw-bold fs-4">TV Shows</span>
                    </label>
                  </span>
                  <div>
                    <ul className="list-unstyled mx-5">
                      <li className="mt-2 mb-2">Release Calender</li>
                      <li className="mt-2 mb-2">Top 250 Movies</li>
                      <li className="mt-2 mb-2">Most popular Movies</li>
                      <li className="mt-2 mb-2">Top Box Office</li>
                      <li className="mt-2 mb-2">Movie News</li>
                      <li className="mt-2 mb-2">India Movies Spotlight</li>
                      <li className="mt-2 mb-2">Show Times & Tickets</li>
                      <li className="mt-2 mb-2">Browse Movie By Genres</li>
                    </ul>
                  </div>
                </div>
                <div className="col-4">
                  <span>
                    <label className="d-flex">
                      <span className="me-4 fs-4">
                        <i className="fas fa-award text-warning"></i>
                      </span>
                      <span className="fw-bold fs-4">Awards & Events</span>
                    </label>
                  </span>
                  <div>
                    <ul className="list-unstyled mx-5">
                      <li className="mt-2 mb-2">Release Calender</li>
                      <li className="mt-2 mb-2">Top 250 Movies</li>
                      <li className="mt-2 mb-2">Most popular Movies</li>
                      <li className="mt-2 mb-2">Top Box Office</li>
                      <li className="mt-2 mb-2">Movie News</li>
                      <li className="mt-2 mb-2">India Movies Spotlight</li>
                      <li className="mt-2 mb-2">Show Times & Tickets</li>
                      <li className="mt-2 mb-2">Browse Movie By Genres</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;
