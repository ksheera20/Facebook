import React from "react";
import "./Post.css";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <img src="kohli.jpeg" alt="kohli" className="postProfileImg" />
          <span className="postUsername">Virat Kohli</span>
          <span className="postDate">10 min ago</span>
          <MoreVertTwoToneIcon style={{ marginLeft: "300px" }} />
        </div>
        <div className="postContent">
          <p className="postText">The only thing we have is the MOMENT</p>
        </div>
        <div className="postInteractions">
          <div>
            <img src="virat.jpg" alt="kohli" className="postImg" />
          </div>
        </div>
      </div>
    </div>
  );
}
