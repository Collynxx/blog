import React, { useState } from "react";
import BlogList from "./BlogList/BlogList";
import "./homepage.css";
import SearchBar from "./SearchBar/SearchBar";
import Homeview from "./BlogList/HomeView/HomeVIew";
import Hr from "./BlogList/hr/hr";
import { blogList, relatedList } from "../../config/data";
import CardList from "../../components/CardList";
import NewsSource from "../../api/NewsSource";
import Relatedlist from "../Related/Related"
import Footer from "./Footer"
import EmptyList from "../../components/EmptyList/EmptyList";

function Homepage() {

  const [blogs, setBlogs] = useState(blogList);


  const [state, setState] = useState({
    results: [],
  });

  const onSearch = async (text) => {
    const results = await NewsSource.get("/", {
      params: { s: text, apiKey: "167569468ff74e44bafc71edeefc5459" },
    });
    setState((prevState) => {
      return { ...prevState, results: results };
    });
  };
  //https://newsapi.org/v2/everything?q=keyword&apiKey=167569468ff74e44bafc71edeefc5459
  
  return (
    <div className="homepage">
      {/* Search Bar */}
      <SearchBar onSearch={onSearch} />  
      <CardList results={state.results} />
      {/* BlogList */}
      <Homeview />
      {/* Horizontal line */}
      <Hr />
      {/* BlogList & EmptyList*/}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
      <Hr />
      <Relatedlist blogs={relatedList} />
      <Footer/>
    </div>
  );
}

export default Homepage;
