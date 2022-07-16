import React from "react";
import "./blogitem.css";
import { Link } from "react-router-dom";
import ad from "../../../../Assets/images/ad.png"

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
