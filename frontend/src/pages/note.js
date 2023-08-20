import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import Note from "../components/Note.js";

// graphql

const GET_NOTE = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
`;

//brings id of param

const NotePage = (props) => {
  //get query of params in the url
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });

  if (loading) return <p>LOADING...</p>;
  if (error) return <p>Error! Note not Found</p>;

  return <Note note={data.note} />;
};

export default NotePage;
