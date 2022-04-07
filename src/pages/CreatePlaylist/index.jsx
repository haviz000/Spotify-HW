import { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import Tracks from "./Tracks";
import ModalPlaylist from "./ModalPlaylist";
import Playlist from "./Playlist";

import './createPlaylist.css'



const CreatePlaylist = () => {
  const [tracks, setTracks] = useState([]);
  const [selectedTracksUri, setSelectedTracksUri] = useState([]);
  const [isInSearch, setIsInSearch] = useState(false);
  const [showModalPlaylist, setShowModalPlaylist] = useState(false);
  const [titlePlaylist, setTitlePlaylist] = useState("");
  const [descPlaylist, setDescPlaylist] = useState("");
  const [playlistData, setPlaylistData] = useState([]);
  const [playlistDataTitle, setPlaylistDataTitle] = useState([]);


  const getDataSearch = (searchTracks) => {
    setIsInSearch(true);
    const selectedTracks = filterSelectedTracks();
    const searchDistincTracks = searchTracks.filter(
      (track) => !selectedTracksUri.includes(track.uri)
    );
    setTracks([...selectedTracks, ...searchDistincTracks]);
  };

  const filterSelectedTracks = () => {
    return tracks.filter((track) => selectedTracksUri.includes(track.uri));
  };

  const toggleSelect = (track) => {
    const uri = track.uri;

    if (selectedTracksUri.includes(uri)) {
      setSelectedTracksUri(selectedTracksUri.filter((item) => item !== uri));
    } else {
      setSelectedTracksUri([...selectedTracksUri, uri]);
    }
  };

  const handleModalClick = () => {
    const selectedTracks = filterSelectedTracks();
    if (selectedTracks.length !== 0) {
      setPlaylistData(selectedTracks);
      setShowModalPlaylist(true);
    } else {
      alert("Please choose song!");
    }
  };

  const getTitle = (titlePlaylist) => {
    setTitlePlaylist(titlePlaylist);
  };

  const getPlaylistDatatitle = (playlistDataTitle) => {
    setPlaylistDataTitle(playlistDataTitle);
  };

  const Logout = () => {
    window.location.replace("http://localhost:3000");

  };

  return (
    <div className="container">
      <div className="search__item">
      <div className="logout">
            <button className="logout__btn" onClick={Logout}>Log Out</button>
        </div>
        <SearchBar getDataSearch={(tracks) => getDataSearch(tracks)} />
        <div className="create__playlist">
          <button className="btn__playlist" onClick={handleModalClick}>
            <FontAwesomeIcon icon={faPlusSquare} className="icon_playlist" />{" "}
            Create Playlist
          </button>
          <ModalPlaylist
            getTitle={(titlePlaylist) => getTitle(titlePlaylist)}
            onClose={() => setShowModalPlaylist(false)}
            show={showModalPlaylist}
            playlists={playlistData}
            getPlaylistDatatitle={(playlistDataTitle) =>
              getPlaylistDatatitle(playlistDataTitle)
            }
          />
          
        </div>
      </div>
      <div className="playlist__item">
      <p>Your <span>Playlist</span></p>
      <Playlist titlePlaylist={titlePlaylist} desc={descPlaylist} />
      </div>
      <div className="tracks__item">
        {tracks.map((track) => (
          <Tracks
            key={track.id}
            imageUrl={track.album.images[0].url}
            title={track.name}
            artist={track.artists[0].name}
            popularity={track.popularity}
            toggleSelect={() => toggleSelect(track)}
          />
        ))}
      </div>
      <div className="right__item">

      </div>
      <div className="footer__item">

      </div>

    </div>
  )
}

export default CreatePlaylist