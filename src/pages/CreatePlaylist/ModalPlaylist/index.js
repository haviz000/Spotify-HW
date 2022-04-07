import React, { useState } from "react";
import "./modal.css";

const ModalPlaylist = ({
  show,
  onClose,
  getTitle,
  getDesc,
  playlists,
  getPlaylistDatatitle,
}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  if (!show) {
    return null;
  }

  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleInputDesc = (e) => {
    setDesc(e.target.value);
  };
  const datas = Object.assign(playlists, { title: title, desc: desc });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length < 10) {
      alert("Minimum title 10 character");
    } else {
      getTitle(title);
      getPlaylistDatatitle(datas);
      alert("playlist added successfully");
      onClose();
    }
  };
  return (
    <>
      <div className="modal" onClick={onClose}>
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <h1 className="title__modal">
            Create <span>Playlist</span>
          </h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="title">
              <label>Title</label>
              <input type="text" onChange={handleInputTitle} className="input"></input>
            </div>
            <div className="desc">
              <label>Description</label>
              <textarea onChange={handleInputDesc} className="textarea"></textarea>
            </div>
            <button className="save" type="submit">
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalPlaylist;
