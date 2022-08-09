import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import "../section.css";
import "./Reactions.css"

const Drafts = () => {
  const [post, setPost] = useState([]);
  const [len, setLen] = useState([]);

  const fetchData = () => {
    axios
      .get(`https://genesys-blog-api.herokuapp.com/api/v1/post`)
      .then((res) => {
        const posts = res.data.body;
        const postsSize = Object.keys(posts).length;
        setPost(posts);
        setLen(postsSize);
      });
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="container">
      <div className="">
        <div className="">
          <div className="">
            <div className="card posts-card">
              <div className="card-body">
                <div className="media align-items-stretch">
                  <div className="media-body">
                    <h4>Post Reaction</h4>
                    <h3>{len}</h3>
                  </div>
                  <div className="align-self-center">
                    <FontAwesomeIcon icon={faSmile} />
                  </div>
                </div>
              </div>
            </div>
            <br />
            {/* posts */}
            {post.map((item, i) => (

            <div className="border-bottom p-3">
              <div className="dflex justify-content-between">
                <div className="thirty">
                  <h2>Posts</h2>
                  <p>
                  {item.title}
                  </p>
                </div>
                <div className="thirty center">
                  <h2>Views</h2>

                  <p className="grey"> 
                  {item.views}
                  </p>
    
                </div>
                <div className="thirty center">
                  <h2>Comments</h2>

                  <span className="pl">0</span>
                </div>
              </div>
              
            </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Drafts;
