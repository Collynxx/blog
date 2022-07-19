import React from "react";
import RelatedItem from "./RelatedItem/RelatedItem";
import ad from "../../Assets/images/ad.png";
import "./RelatedItem/relateditem.css";

const Relatedlist = ({ blogs }) => (
  <div>
    <div >
      <img className="img-class" src={ad} alt="ad" />
    </div>
    <h2 className="relatedHeader">Related Post</h2>
    <div className="blogList-wrap">
      
      {blogs.map((blog) => (
        <RelatedItem blog={blog} key={blog.id} />
      ))}
    </div>
  </div>
);

export default Relatedlist;
