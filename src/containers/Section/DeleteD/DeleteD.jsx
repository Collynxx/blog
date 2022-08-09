import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../section.css";
import vct from "../../../Assets/images/vct.png"
import comment from "../../../Assets/images/comment.png"
import eye from "../../../Assets/images/eye.png"

const DeleteD = () => {
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
                  <img src={vct} alt="vct.png"/>
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
      </div>
    </div>
  );
};

export default DeleteD;
