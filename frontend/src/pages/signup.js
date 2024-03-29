import React, { useEffect, useState } from "react";

import { useMutation, useApolloClient, gql } from "@apollo/client";
//include props to passes to component for later use

const SIGNUP_USER = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password)
  }
`;

const Signup = (props) => {
  const client = useApolloClient();
  const [values, setValues] = useState();

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    // setValues({
    //   ...values,
    //   [event.target.name]: event.target.value,
    // });
  };

  useEffect(() => {
    document.title = "SignUp Notedly";
  });

  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      // store the JWT in localStorage
      localStorage.setItem("token", data.signUp);
      // update the local cache
      //updates the apollo client, state manager like redux
      client.writeData({ data: { isLoggedIn: true } });
      // redirect the user to the homepage
      props.history.push("/");
    },
  });

  return (
    <div>
      <form
        onSubmit={(event) => {
          console.log("Pressed");
          event.preventDefault();
          signUp({
            variables: {
              ...values,
            },
          });
        }}
      >
        <label htmlFor="username">Username:</label>
        <input
          required
          type="text"
          id="username"
          name="username"
          placeholder="username"
          onChange={(e) => setValues({ ...values, username: e.target.value })}
        />
        <label htmlFor="email">Email:</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <label htmlFor="password">Password:</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
