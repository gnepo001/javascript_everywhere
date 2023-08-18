import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import Note from "../components/Note.js";

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

const NotePage = (props) => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });

  if (loading) return <p>LOADING...</p>;
  if (error) return <p>Error! Note not Found</p>;

  return <Note note={data.note} />;
};

export default NotePage;
