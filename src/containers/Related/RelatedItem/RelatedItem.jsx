import React from "react";
import "./relateditem.css";
import { Link } from "react-router-dom";

const BlogItem = ({
  blog: { id, createdAt, title, description, category, cover },
}) => (
  <div className="blogItem-wrap">
    <div className="blogItem-flex">
      <img className="blogImg" src={cover} alt="cover" />
      <p className="blogabt"> {createdAt}</p>
      <h3 className="blogtitle">{title}</h3>
      <p className="blogItem-desc">{description.slice(0, 150)}</p>
      <Link to={`/blog/${id}`}>Read More</Link>
    </div>
  </div>
);

export default BlogItem;
