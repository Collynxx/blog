import React from "react";
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
} from "@fortawesome/free-solid-svg-icons";
import "../section.css";
import vct from "../../../Assets/images/vct.png"
import comment from "../../../Assets/images/comment.png"
import eye from "../../../Assets/images/eye.png"

const Delete = () => {
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
                    <h3>3</h3>
                  </div>
                  <div className="align-self-center">
                    {" "}
                    <img src={vct} alt="vct.png" />
                  </div>
                </div>
              </div>
            </div>
            <br />
            {/* posts */}
            <div className="border p-3">
              <p className="title">
              Imperdiet posuere tellus est mi fames sit tincidunt magna bibendum.
              </p>
              <p className="grey">Published: 18 may</p>
              <div className="dflex justify-content-between">
                <div>
                <span className="pl"><img src={eye} alt="eye.png"/>8</span>
                  <span className="pl"><img src={comment} alt="comment.png"/>4</span>
                </div>
                <div>
                  <span className="pl">Edit</span>
                  <span className="pl">Delete</span>
                </div>
              </div>
            </div>
            <div className="border p-3">
              <p className="title">
              Imperdiet posuere tellus est mi fames sit tincidunt magna bibendum.
              </p>
              <p className="grey">Published: 18 may</p>
              <div className="dflex justify-content-between">
                <div>
                <span className="pl"><img src={eye} alt="eye.png"/>8</span>
                  <span className="pl"><img src={comment} alt="comment.png"/>4</span>
                </div>
                <div>
                  <span className="pl">Edit</span>
                  <span className="pl">Delete</span>
                </div>
              </div>
            </div>
            <div className="border p-3">
              <p className="title">
              Imperdiet posuere tellus est mi fames sit tincidunt magna bibendum.
              </p>
              <p className="grey">Published: 18 may</p>
              <div className="dflex justify-content-between">
                <div>
                <span className="pl"><img src={eye} alt="eye.png"/>8</span>
                  <span className="pl"><img src={comment} alt="comment.png"/>4</span>
                </div>
                <div>
                  <span className="pl">Edit</span>
                  <span className="pl">Delete</span>
                </div>
              </div>
            </div>
            <div className="border p-3">
              <p className="title">
              Imperdiet posuere tellus est mi fames sit tincidunt magna bibendum.
              </p>
              <p className="grey">Published: 18 may</p>
              <div className="dflex justify-content-between">
                <div>
                <span className="pl"><img src={eye} alt="eye.png"/>8</span>
                  <span className="pl"><img src={comment} alt="comment.png"/>4</span>
                </div>
                <div>
                  <span className="pl">Edit</span>
                  <span className="pl">Delete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="edit half">
          <h3>Create New Post</h3>
          <div className="editor-container">
            <div className="toolbar d-flex flex-row-reverse">
              <button onClick={editorFunctions.redo}>
                <FontAwesomeIcon icon={faRedo} />
              </button>
              <button onClick={editorFunctions.undo}>
                <FontAwesomeIcon icon={faUndo} />
              </button>
            </div>
            <div className="editor" contentEditable></div>
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
              <button className="post-btn">Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
