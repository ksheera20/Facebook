import React from 'react';
import './leftbar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

function Leftbar() {
  return (
    <nav className="left-navbar">
      <ul>
        <li>
          <RssFeedIcon />
          <a href="#feed">Feed</a>
        </li>
        <li>
          <ChatIcon />
          <a href="#chat">Chat</a>
        </li>
        <li>
          <OndemandVideoIcon />
          <a href="#videos">Videos</a>
        </li>
        <li>
          <GroupsIcon />
          <a href="#groups">Groups</a>
        </li>
        <li>
          <BookmarkIcon />
          <a href="#bookmarks">Bookmarks</a>
        </li>
        <li>
          <QuestionMarkIcon />
          <a href="#questions">Questions</a>
        </li>
        <li>
          <WorkIcon />
          <a href="#job">Job</a>
        </li>
        <li>
          <EventIcon />
          <a href="#events">Events</a>
        </li>
        <li>
          <CreateNewFolderIcon />
          <a href="#courses">Courses</a>
        </li>
        <li>
          <a href="#show-more" className='Show'>Show More</a>
        </li>
      </ul>
    </nav>
  );
}

export default Leftbar;