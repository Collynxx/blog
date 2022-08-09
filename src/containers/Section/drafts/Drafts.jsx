import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../section.css";
import "./Drafts.css"

const Drafts = () => {
  return (
    <div className="container">
      <div className="">
        <div className="">
          <div className="">
            <div className="card posts-card">
              <div className="card-body">
                <div className="media align-items-stretch">
                  <div className="media-body">
                    <h4>Drafts</h4>
                    <h3>4</h3>
                  </div>
                  <div className="align-self-center">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                </div>
              </div>
            </div>
            <div className="dtext">
              <p>All drafts</p>
            </div>
            <br />
            {/* posts */}
            <div className="border-bottom p-3">
              <div className="dflex justify-content-between">
                <div>
                  <p className="title">
                    Hello i am here to test the heading and also show collins i
                    am not good in front end
                  </p>
                  <p className="grey">2 Jun</p>
                </div>
                <div>
                  <span className="pl">Delete</span>
                </div>
              </div>
            </div>
            <div className="border-bottom p-3">
              <div className="dflex justify-content-between">
                <div>
                  <p className="title">
                    Hello i am here to test the heading and also show collins i
                    am not good in front end
                  </p>
                  <p className="grey">2 Jun</p>
                </div>
                <div>
                  <span className="pl">Delete</span>
                </div>
              </div>
            </div>
            <div className="border-bottom p-3">
              <div className="dflex justify-content-between">
                <div>
                  <p className="title">
                    Hello i am here to test the heading and also show collins i
                    am not good in front end
                  </p>
                  <p className="grey">2 Jun</p>
                </div>
                <div>
                  <span className="pl">Delete</span>
                </div>
              </div>
            </div>
            <div className="border-bottom p-3">
              <div className="dflex justify-content-between">
                <div>
                  <p className="title">
                    Hello i am here to test the heading and also show collins i
                    am not good in front end
                  </p>
                  <p className="grey">2 Jun</p>
                </div>
                <div>
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

export default Drafts;
