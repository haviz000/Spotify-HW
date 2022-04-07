import React, { useState } from "react";
import './searchBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import {searchTrack} from '../../../utils/dataApi'

const SearchBar = ({getDataSearch}) => {
  const accessToken = useSelector((state) => state.auth.accessToken);

  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await searchTrack(text, accessToken);

      const tracks = response.tracks.items;
      getDataSearch(tracks);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <div className="searchBar__container">
        <div className="searchBar__header">
          <h1 className="title__track">
            Playlist <span>track</span>
          </h1>
        </div>
        <form className="field__playlist" onSubmit={handleSubmit}>
          <input
            className="input__playlist"
            placeholder="Artist, Song, or Podcast"
            onChange={handleInput}
          ></input>

          <button type="submit" className="btn__search">
            <FontAwesomeIcon className="search__icon" icon={faSearch} />
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default SearchBar;
