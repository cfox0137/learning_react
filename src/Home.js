import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
 
  const {data, isPending, error} = useFetch("http://localhost:8000/blogs")

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading</div>}
      {data && <BlogList const blogs={data} title="What a nice title" />}
      {data && (
        <BlogList
          const
          blogs={data.filter((blog) => data.author === "author2")}
          title="Other blogs"
        />
      )}
    </div>
  );
};

export default Home;
