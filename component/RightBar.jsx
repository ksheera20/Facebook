import React from "react";
import "./RightBar.css";
function RightBar() {
  return (
    <div className="right-bar">
      <ul className="rightbarfriendlist">
        <li className="rightbarfriend">
          <img className="rightbarfriendImg" src="dhoni.jpg" alt="dhoni" />
          <span className="rightbarfriendName">
            <strong>Ms Dhoni</strong> and<strong>2 other Friends </strong>
            have a birthday today
          </span>
        </li>
      </ul>

      <img
        src="burger.jpg"
        alt="burger"
        style={{ width: "410px", height: "460px", borderRadius: "10px" }}
      />
    </div>
  );
}

export default RightBar;