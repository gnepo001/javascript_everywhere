import React from "react";

// new dependencies - allows for state from app.js
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

// local query - pulls from app.js
const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

const Header = (props) => {
  // query hook for user logged in state
  const { data } = useQuery(IS_LOGGED_IN);
  return (
    <header>
      <div>
        {data.isLoggedIn ? (
          <p>Log Out</p>
        ) : (
          <p>
            <Link to={"/signin"}>Sign In</Link> or{" "}
            <Link to={"/signup"}>Sign Up</Link>
          </p>
        )}
      </div>
      <h1>Notedly</h1>
    </header>
  );
};

export default Header;
