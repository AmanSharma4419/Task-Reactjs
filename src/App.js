import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Atricle_Info = gql`
  {
    articles :articles(Title:Web){
      Title
      Body
    }
  }
`;
function App() {
  const { data, loading, error } = useQuery(Atricle_Info);
  if (loading) return <p>Loading</p>;
  if (error) return <p>`There Might Be Some Error Due To ${error} ` </p>;
  console.log(data, "getting the data by graphql");
  return (
    <>
      <p>List Of Data Given Below</p>
      <p>
        {data &&
          data.articles.map((value, index) => {
            return (
              <div key={index}>
                <p>
                  <strong>Title</strong>:{value.Title}
                </p>
                <p>
                  <strong>Body</strong>:{value.Body}
                </p>
              </div>
            );
          })}
      </p>
    </>
  );
}

export default App;
