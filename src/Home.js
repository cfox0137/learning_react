import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/blogs").then((res) => {
      return res.json().then((data) => {
        setBlogs(data);
        setIsPending(false);
      });
    });
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading</div>}
      {blogs && <BlogList const blogs={blogs} title="What a nice title" />}
      {blogs && (
        <BlogList
          const
          blogs={blogs.filter((blog) => blog.author === "author2")}
          title="Other blogs"
        />
      )}
    </div>
  );
};

export default Home;
