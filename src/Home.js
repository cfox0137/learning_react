import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {


  const [blogs, setBlogs] = useState([
    { title: "title1", body: "lorem", author: "author1", id: 1 },
    { title: "title2", body: "lorem", author: "author2", id: 2 },
    { title: "title3", body: "lorem", author: "author3", id: 3 },
  ]);

  const handleDelete = (id) => {
        
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log("testy")
  }, []);
 

  return (
    <div className="home">
      <BlogList const blogs={blogs} title = "What a nice title" handleDelete={handleDelete} />
      <BlogList const blogs={blogs.filter((blog)=>(
        blog.author === "author2"
      ))} title = "Other blogs" handleDelete={handleDelete}/>

    </div>
  );
};

export default Home;
