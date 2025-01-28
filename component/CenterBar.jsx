import React from "react";
import Share from "./Share";
import "./CenterBar.css";
import Post from "./Post";

export default function CenterBar() {
  return (
    <div className="centerbar">
      <div className="centerbarWrapper">
        <Share />
        <Post />
      </div>
    </div>
  );
}
