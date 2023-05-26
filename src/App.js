import "./App.css";
import "mdb-ui-kit/css/mdb.min.css";
import "mdb-ui-kit/js/mdb.min.js";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import WatchList from "./components/WatchList";
import Movie from "./components/Movie";
import { useState } from "react";

function PrivateRoute({ logIn, children }) {
  if (logIn) {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
}

function App() {
  const [logIn, SetLogIn] = useState(false);
  // const [userName, SetUserName] = useState("");

  return (
    <div>
      <Header SetLogIn={SetLogIn} logIn={logIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn SetLogIn={SetLogIn} />} />
        <Route
          path="/watchlist"
          element={
            <PrivateRoute logIn={logIn}>
              <WatchList SetLogIn={SetLogIn} />
            </PrivateRoute>
          }
        />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
