import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";

import SearchIcon from "@mui/icons-material/Search";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <h1>Facebook</h1>
        <div className="search-bar">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            placeholder="Search for friends, posts, or videos"
          />
        </div>
      </div>
      <div className="header-right">
        <h2>Homepage</h2>
        <h2>Timeline</h2>
        {/* <Link to="/">Homepage</Link>
        <Link to="/timeline">Timeline</Link> */}
      </div>
      <div className="header-icons">
        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginRight: "20px",
          }}
        >
          <PersonRoundedIcon style={{ fontSize: "24px", cursor: "pointer" }} />

          <sup
            style={{
              position: "absolute",
              top: "-10px",
              right: "-20px",
              color: "white",
              background: "red",
              borderRadius: "50%",
              padding: "2px 6px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            21
          </sup>
        </div>

        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginRight: "20px",
          }}
        >
          <MailIcon style={{ fontSize: "24px", cursor: "pointer" }} />
          <sup
            style={{
              position: "absolute",
              top: "-10px",
              right: "-20px",
              color: "white",
              background: "red",
              borderRadius: "50%",
              padding: "2px 6px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            56
          </sup>
        </div>
        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginRight: "20px",
          }}
        >
          <NotificationsIcon style={{ fontSize: "24px", cursor: "pointer" }} />
          <sup
            style={{
              position: "absolute",
              top: "-10px",
              right: "-20px",
              color: "white",
              background: "red",
              borderRadius: "50%",
              padding: "2px 6px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            15
          </sup>
        </div>
        {/* add here */}
        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginRight: "20px",
          }}
        >
          <img
            src="/profile.jpg"
            alt="profile"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
        </div>
        {/* <AccountCircleIcon style={{ fontSize: "24px", cursor: "pointer" }} /> */}
      </div>
    </div>
  );
}

export default Header;