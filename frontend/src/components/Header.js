import React from "react";
import { Link, withRouter } from "react-router-dom";

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
  // including the client for refereencung the apollo store
  const { data, client } = useQuery(IS_LOGGED_IN);
  return (
    <header>
      <div>
        {data.isLoggedIn ? (
          <button
            onClick={() => {
              // remove the token
              localStorage.removeItem("token");
              // clear the application's cache
              client.resetStore();
              // update local state
              client.writeData({ data: { isLoggedIn: false } });
              // redirect the user to the home page
              props.history.push("/");
            }}
          >
            Log Out
          </button>
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

// we wrap our component in the withRouter higher-order component
export default withRouter(Header);
