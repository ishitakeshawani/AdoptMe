import React from "react";
import SearchParams from "./SearchParams";
import "./styles.css";
import Details from "./Details";
import { Router, Link } from "@reach/router";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>;
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>;
    </div>
  );
};

export default App;
