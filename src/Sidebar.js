import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import Whatshoticon from "@material-ui/icons/Whatshot";
import SubsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideoOutlined";
import WatchLatericon from "@material-ui/icons/WatchLater";
import ThumbUpaltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} Title="Home" />
      <SidebarRow Icon={Whatshoticon} Title="Trending" />
      <SidebarRow Icon={SubsIcon} Title="Subscriptions" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} Title="Library" />
      <SidebarRow Icon={HistoryIcon} Title="History" />
      <SidebarRow Icon={OndemandVideoIcon} Title="Your videos" />
      <SidebarRow Icon={WatchLatericon} Title="Watch Later" />
      <SidebarRow Icon={ThumbUpaltOutlinedIcon} Title="Liked videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} Title="Show more" />
      <hr />
    </div>
  );
}

export default Sidebar;
