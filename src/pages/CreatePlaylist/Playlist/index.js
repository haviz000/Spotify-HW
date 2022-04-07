import React from "react";
import "./playlist.css";

const Playlist = ({imageUrl,title,artist,popularity,key,desc,titlePlaylist}) => {
  return (
    <>
      <div className="playlist__container">
        <div className="title__group">
          <a className="title" href="#">{titlePlaylist}</a>
        </div>
      </div>
    </>
  );
};
export default Playlist;