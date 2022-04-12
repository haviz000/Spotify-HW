import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToPlaylist, createPlaylist } from "../../../utils/dataApi";
import { getPlaylist } from "../../../slice/playlistDataSlice";
import "./modal.css";

const ModalPlaylist = ({ show, onClose, uriTracks }) => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  if (!show) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.title.length < 10) {
      alert("title must be more than 10 characters");
    } else {
      try {
        const resCreatePlaylist = await createPlaylist(
          accessToken,
          process.env.REACT_APP_SPOTIFY_USER_ID,
          {
            name: form.title,
            description: form.desc,
          }
        );
        console.log(resCreatePlaylist);
        dispatch(
          getPlaylist({
            playlistData: resCreatePlaylist,
          })
        );
        await addToPlaylist(accessToken, resCreatePlaylist.id, uriTracks);
        setForm({ title: "", description: "" });
        onClose(true);
      } catch (e) {
        alert(e);
      }
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
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="input"
              ></input>
            </div>
            <div className="desc">
              <label>Description</label>
              <textarea
                name="desc"
                value={form.desc}
                onChange={handleChange}
                className="textarea"
              ></textarea>
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
