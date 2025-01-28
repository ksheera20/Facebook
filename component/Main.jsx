import React from "react";
import RssFeedRoundedIcon from "@mui/icons-material/RssFeedRounded";
import MessageSharpIcon from "@mui/icons-material/MessageSharp";
import VideoSettingsOutlinedIcon from "@mui/icons-material/VideoSettingsOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import HelpCenterRoundedIcon from "@mui/icons-material/HelpCenterRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import "./Main.css";
function Main() {
  return (
    <div className="main">
      <ul className="menu">
        <li>
          <RssFeedRoundedIcon />
          Feed
        </li>
        <li>
          <MessageSharpIcon />
          Chat
        </li>
        <li>
          <VideoSettingsOutlinedIcon />
          videos
        </li>
        <li>
          <GroupsOutlinedIcon />
          Groups
        </li>
        <li>
          <BookmarkOutlinedIcon />
          Bookmarks
        </li>
        <li>
          <HelpCenterRoundedIcon />
          Questions
        </li>
        <li>
          <WorkRoundedIcon />
          Jobs
        </li>
        <li>
          <EventAvailableRoundedIcon />
          Events
        </li>
        <li>
          <SchoolRoundedIcon />
          Courses
        </li>
      </ul>

      <button>Show more</button>
      <hr className="leftbarhr" />
      <ul className="leftbarfriendlist">
        <li className="leftbarfriend">
          <img className="leftbarfriendImg" src="rohit.jpg" alt="rohitsharma" />
          <span className="leftbarfriendName">rohit sharma</span>
        </li>

        <li className="leftbarfriend">
          <img className="leftbarfriendImg" src="dhoni.jpg" alt="dhoni" />
          <span className="leftbarfriendName">dhoni</span>
        </li>

        <li className="leftbarfriend">
          <img
            className="leftbarfriendImg"
            src="sachin.jpg"
            alt="sachin thendulker"
          />
          <span className="leftbarfriendName">sachin thedulkar</span>
        </li>
      </ul>
    </div>
  );
}

export default Main;
