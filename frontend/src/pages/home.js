import React from "react";
import { useQuery, gql } from "@apollo/client";

//our graphql query, stored as a variable
const GET_NOTES = gql`
  query NoteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
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
  }
`;

const Home = () => {
  //query hook
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES);

  //if the data is loading, display a loading message
  if (loading) return <p>Loading...</p>;

  //if there is an error fetching the data, display an error message
  if (error) return <p>Error!</p>;

  return (
    <div>
      {console.log(data)}
      The data loaded!
    </div>
  );
};

export default Home;
