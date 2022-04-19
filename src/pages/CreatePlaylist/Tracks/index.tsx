import React, { useState } from "react";
import PropTypes from 'prop-types'
import "./tracks.css";

const Tracks = ({ imageUrl, title, artist, toggleSelect,key,popularity }) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleToggleSelect = () => {
      setIsSelected(!isSelected);
      toggleSelect();
    }

  return (
    <div>
      <ul key={key} data-testid="track" className="playlist">
        <li>
          <img className="album__img" src={imageUrl} alt={title} />
          <div className="text__group">
            <p className="song__title">{title}</p>
            <p className="song__artist">{artist}</p>
            <p className="song__popularity">
              Popularity : <span>{popularity}</span>
            </p>
          </div>
          <div className="card__action">
            <button
              className={`btn btn-select ${
                isSelected ? "btn-primary" : "btn-secondary"
              }`}
              onClick={handleToggleSelect}
            >
              {isSelected ? "Deselect" : "Select"}
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Tracks;

Tracks.propTypes =  {
  imageUrl:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  artist:PropTypes.string.isRequired,
  toggleSelect:PropTypes.func.isRequired,
  key:PropTypes.string.isRequired,
  popularity:PropTypes.string.isRequired
}