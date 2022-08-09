import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faUnderline,
  faAlignLeft,
  faAlignCenter,
  faListOl,
  faListUl,
  faRedo,
  faUndo,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./section.css";
import vct from "../../Assets/images/vct.png";
import comment from "../../Assets/images/comment.png";
import eye from "../../Assets/images/eye.png";
import axios from "axios";

const GET_POST = "https://genesys-blog-api.herokuapp.com/api/v1/post";

const Section = () => {
  const [post, setPost] = useState([]);
  const [len, setLen] = useState([]);
  const [ptitle, setPtitle] = useState([]);
  const [pbody, setPbody] = useState([]);
  const [pcategory, setPcategory] = useState([]);
  const [pimage, setImage] = useState([]);

  const token =
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmYxMjlmNGY5ODA5MmNhNzg1MGIyNTUiLCJlbWFpbCI6ImVtbWFudWVsdWd3dWV6ZTZAZ21haWwuY29tIiwiaWF0IjoxNjYwMDA2Njg0LCJleHAiOjE2NjA3MjY2ODR9.uTwQPrpoIGMAl5r_NInqogjecyYofGNQcFvC_aGT4ABQSIrVo9L6t1yswp3sWpVoFHjJMty_MimSbo47vhxweg";
  const postData = async (e) => {
    e.preventDefault();
    axios.post(
      GET_POST,
      JSON.stringify({
        title: ptitle,
        body: pbody,
        category: pcategory,
      }),
      {
        headers: {
          Authorization: `Bearer${token}`,
          "Content-Type": "application/json",
        },
      }
    );
  };

  const fetchData = () => {
    axios.get(GET_POST).then((res) => {
      const posts = res.data.body;
      const postsSize = Object.keys(posts).length;
      setPost(posts);
      setLen(postsSize);
      setPcategory("sports");

      setImage(eye);
    });
  };

  useEffect(() => {
    fetchData();
  });

  const editorFunctions = {
    undo() {
      document.execCommand("undo", false, "");
    },
    redo() {
      document.execCommand("redo", false, "");
    },
    bold() {
      document.execCommand("bold", false, "");
    },
    italic() {
      document.execCommand("italic", false, "");
    },
    underline() {
      document.execCommand("underline", false, "");
    },
    justifyCenter() {
      document.execCommand("justifyCenter", false, "");
    },
    justifyLeft() {
      document.execCommand("justifyLeft", false, "");
    },
    insertOrderedList() {
      document.execCommand("insertOrderedList", false, "");
    },
    insertUnorderedList() {
      document.execCommand("insertUnorderedList", false, "");
    },
  };

  return (
    <div className="container">
      <div className="row">
        <div className="posts">
          <div className="half2">
            <div className="card ">
              <div className="card-body">
                <div className="media align-items-stretch">
                  <div className="media-body">
                    <h4>Posts</h4>
                    <h3>{len}</h3>
                  </div>
                  <div className="align-self-center">
                    <img src={vct} alt="vct.png" />
                  </div>
                </div>
              </div>
            </div>
            <br />
            {/* posts */}
            {post.map((item, i) => (
              <div className="border p-3" key={i}>
                <p className="title">{item.title}</p>
                <p className="grey">Published: {item.createdAt}</p>
                <div className="dflex justify-content-between">
                  <div>
                    <span className="pl">
                      <img src={eye} alt="eye.png" />8
                    </span>
                    <span className="pl">
                      <img src={comment} alt="comment.png" />4
                    </span>
                  </div>
                  <div>
                    <span className="pl">Edit</span>
                    <span className="pl">Delete</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="edit half">
          <h3>Create New Post</h3>
          <div className="editor-container">
            <div className="toolbar d-flex">
              <div
                className="flex-start post-title"
                contentEditable
                onInput={(e) => setPtitle(e.currentTarget.textContent)}
                data-placeholder="Post Title"
              ></div>
              <div className=" d-flex flex-end posts-toolbar-top">
                <button onClick={editorFunctions.undo}>
                  <FontAwesomeIcon icon={faUndo} />
                </button>
                <button onClick={editorFunctions.redo}>
                  <FontAwesomeIcon icon={faRedo} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            <div
              className="editor"
              contentEditable
              onInput={(e) => setPbody(e.currentTarget.textContent)}
            ></div>
            <div className="toolbar d-flex justify-content-between">
              <button onClick={editorFunctions.bold}>
                <FontAwesomeIcon icon={faBold} />
              </button>
              <button onClick={editorFunctions.italic}>
                <FontAwesomeIcon icon={faItalic} />
              </button>
              <button onClick={editorFunctions.underline}>
                <FontAwesomeIcon icon={faUnderline} />
              </button>
              <button onClick={editorFunctions.justifyCenter}>
                <FontAwesomeIcon icon={faAlignCenter} />
              </button>
              <button onClick={editorFunctions.justifyLeft}>
                <FontAwesomeIcon icon={faAlignLeft} />
              </button>
              <button onClick={editorFunctions.insertOrderedList}>
                <FontAwesomeIcon icon={faListOl} />
              </button>
              <button onClick={editorFunctions.insertUnorderedList}>
                <FontAwesomeIcon icon={faListUl} />
              </button>
            </div>
            <div className="sub-btn d-flex flex-row-reverse">
              <button onClick={postData} className="post-btn">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
