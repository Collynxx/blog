import React from "react";
import BlogList from "./BlogList/BlogList";
import "./homepage.css";
import SearchBar from "./SearchBar/SearchBar";
import Homeview from "./BlogList/HomeView/HomeVIew";
import Hr from "./BlogList/hr/hr";
import { blogList } from "../../config/data";


const Homepage = () => {
  return (
    <div className="homepage">
      {/* Search Bar */}
      <SearchBar />

      {/* BlogList */}
      <Homeview />
      {/* Horizontal line */}
      <Hr />
      {/* BlogList */}
      <BlogList blogs={blogList} />     
    </div>
  );
};

export default Homepage;
