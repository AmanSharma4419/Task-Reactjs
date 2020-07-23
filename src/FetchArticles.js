import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Atricle_Info = gql`
  query {
    articles {
      Title
      Body
    }
  }
`;

function FetchArticles() {
  // Hook for clearig the localstorege items
  useEffect(() => {
    return () => {
      localStorage.clear();
    };
  }, []);

  const { data, loading, error } = useQuery(Atricle_Info);
  if (loading)
    return (
      <center>
        <p>Loading</p>
      </center>
    );
  if (error) return <p>`There Might Be Some Error Due To ${error} ` </p>;
  console.log(data, "getting the data by graphql");
  return (
    <>
      <center>
        <p>Articles</p>
      </center>
      <p>
        {data &&
          data.articles.map((value, index) => {
            return (
              <div key={index} class="tile is-child box">
                <p class="title">{value.Title}</p>
                <p>{value.Body}</p>
              </div>
            );
          })}
      </p>
    </>
  );
}

export default FetchArticles;
