import React from "react";
import { Link } from "react-router-dom";
import "./playlist.css";

const Playlist = ({titlePlaylist}) => {
  return (
    <>
      <div className="playlist__container">
        <div className="title__group">
          <Link to="/your-playlist" className="title">{titlePlaylist}</Link>
        </div>
      </div>
    </>
  );
};
export default Playlist;