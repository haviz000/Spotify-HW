import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar/index.tsx";
import Tracks from "./Tracks/index.tsx";
import ModalPlaylist from "./ModalPlaylist";
import Playlist from "./Playlist";
import { Button } from "@mui/material";
import './createPlaylist.css'




const CreatePlaylist = (props) => {
  const [tracks, setTracks] = useState([]);
  const [selectedTracksUri, setSelectedTracksUri] = useState([]);
  const [showModalPlaylist, setShowModalPlaylist] = useState(false);

  const getDataSearch = (searchTracks) => {
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
      setShowModalPlaylist(true);
    } else {
      alert("Please choose song!");
    }
  };


  const Logout = () => {
    const logout = window.location.hostname;
    window.location.replace(logout);
  };

  return (
    <div className="container">
      <div className="search__item">
        <div className="logout">
          <Button
            style={{backgroundColor:"#1ED760",color:"#fff"}}
            className="logout__btn" 
            onClick={Logout}>Log Out</Button>
        </div>
        <SearchBar getDataSearch={(tracks) => getDataSearch(tracks)} />
        <div className="create__playlist">
          <button onClick={handleModalClick} className="btn__playlist" >
            <FontAwesomeIcon icon={faPlusSquare} className="icon_playlist" /> {" "}
            Create Playlist
          </button>
          <ModalPlaylist
            onClose={() => setShowModalPlaylist(false)}
            show={showModalPlaylist}
            uriTracks={selectedTracksUri}
          />

        </div>
      </div>
      <div className="playlist__item">
        <p>Your <span>Playlist</span></p>
        <Playlist />
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