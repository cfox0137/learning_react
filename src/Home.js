import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await fetch("http://localhost:8000/blogs");
        if (!res.ok) {
          throw Error("error while fetching blogs...");
        }
        const blogsFetched = await res.json();
        setBlogs(blogsFetched);
      } catch (err) {
        setError(err.message);
      }
      setIsPending(false);
    };
    
      getBlogs();
  
  }, []);


  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading</div> }
      { blogs && <BlogList const blogs={ blogs } title="What a nice title" />}
      { blogs && (
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
