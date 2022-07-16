import React from "react";
import "./HomeView.css";
import atiku from "../HomeView/atiku.png";
import peterobi from "../HomeView/peterobi.png";
import agba from "../../../../Assets/images/agba.png";
import tinubu from "../../../../Assets/images/tinubu.png";
import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <div className="homeview">
      <div>
        <div className="homeviewSingle">
          <div>
            <img src={peterobi} alt="peterobi" className="hvs-img" />
          </div>
          <h4>June 24, 2022</h4>
          <div>
            <h3>
              Malesuada vel arcu arcu aliquam sed sagittis nisi, viverra. Sapien
              amet velit et non eleifend vulputate sed at. Adipiscing mauris
              pellentesque purus ut proin. Velit pulvinar amet elit fames
              pretium vitae sed viverra aenean.
            </h3>
            <p className="homeviewp">
              Malesuada vel arcu arcu aliquam sed sagittis nisi, viverra. Sapien
              amet velit et non eleifend vulputate sed at. Adipiscing mauris
              pellentesque purus ut proin.
            </p>
            <Link className="hvs-more" to={""}>
              Read More
            </Link>
          </div>
        </div>
        <div className="homeviewMultiple">
          <div className="hvs-post">
            <div className="hvs-thumb">
              <img src={atiku} alt="atiku" className="hvs-thuiumbimg" />
            </div>
            <div className="hvs-details">
              <p className="hvs-date">Mar 22, 2022</p>
              <h4 className="hvs-bdytext">
                Imperdiet posuere tellus est mi fames sit tincidunt magna
                bibendum. Mus eget ac habitant feugiat. Commodo.
              </h4>
              <Link className="hvs-more" to={""}>
                Read More
              </Link>
            </div>
          </div>
          <div className="hvs-post hvs-middle">
            <div className="hvs-thumb">
              <img src={agba} alt="agba" className="hvs-thuiumbimg" />
            </div>
            <div className="hvs-details">
              <p className="hvs-date">July 12, 2022</p>
              <h4 className="hvs-bdytext">
                Imperdiet posuere tellus est mi fames sit tincidunt magna
                bibendum. Mus eget ac habitant feugiat. Commodo.
              </h4>
              <Link className="hvs-more" to={""}>
                Read More
              </Link>
            </div>
          </div>
          <div className="hvs-post">
            <div className="hvs-thumb">
              <img src={tinubu} alt="tinubu" className="hvs-thuiumbimg" />
            </div>
            <div className="hvs-details">
              <p className="hvs-date">July 12, 2022</p>
              <h4 className="hvs-bdytext">
                Imperdiet posuere tellus est mi fames sit tincidunt magna
                bibendum. Mus eget ac habitant feugiat. Commodo.
              </h4>
              <Link className="hvs-more" to={""}>
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
