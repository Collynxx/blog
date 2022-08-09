import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogList, relatedList } from "../../config/data";
import "./blog.css";
import { Link } from "react-router-dom";
import EmptyList from "../../components/EmptyList/EmptyList";
import odogwu from "../../Assets/images/odogwu.png"
import wiz from "../../Assets/images/wiz.png"

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));

    if (blog) {
      setBlog(blog);
    }
  }, []);
  return (
    <div>
      <Link className="blog-goBack" to="/">
        <span>&#8592;</span> Go Back
      </Link>

      {blog ? (
        <div className="blog-wrap">
          <header>
            <img src={blog.cover} alt="cover" />
            <p className="blog-date">Published {blog.createdAt}</p>
          </header>
          <p className="blog-desc">{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
      <div className="ads">
        <img src={wiz} alt="wiz"/>
        <img src={odogwu} alt="odogwu"/>
      </div>
  
    </div>
  );
};

export default Blog;
