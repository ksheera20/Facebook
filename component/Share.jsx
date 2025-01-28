import CollectionsIcon from "@mui/icons-material/Collections";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SentimentVerySatisfiedSharpIcon from "@mui/icons-material/SentimentVerySatisfiedSharp";
import React from "react";
import "./Share.css";
export default function Share() {
  var style1 = { color: "blue" };
  var style2 = { color: "red" };
  var style3 = { color: "green" };
  var style4 = { color: "yellow" };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="kohli.jpeg" alt="kohli" className="shareProfileImg" />
          <input
            className="shareInput"
            placeholder="what's in your mind Virat?"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareButton1">
          <div className="shareOptions">
            {/* 1 */}
            <div className="shareOption">
              <CollectionsIcon className="shareIcon" style={style2} />
              <span className="shareText">photo/video</span>
            </div>
            {/* 2 */}
            <div className="shareOption">
              <LocalOfferIcon className="shareIcon" style={style1} />
              <span className="shareText">tag</span>
            </div>
            {/* 3 */}
            <div className="shareOption">
              <LocationOnIcon className="shareIcon" style={style3} />
              <span className="shareText">location</span>
            </div>
            {/* 4 */}
            <div className="shareOption">
              <SentimentVerySatisfiedSharpIcon
                className="shareIcon"
                style={style4}
              />
              <span className="shareText">feeling</span>
            </div>
          </div>
          <button className="sharebtn">share</button>
        </div>
      </div>
    </div>
  );
}
