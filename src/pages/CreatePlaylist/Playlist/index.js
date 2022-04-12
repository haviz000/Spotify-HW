import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getPlaylist } from "../../../utils/dataApi";
import "./playlist.css";

const Playlist = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const playlistId = useSelector((state) => state.playlist.playlistData.id);
  


  // useEffect(() => {
  //   async function getPlaylistData(){
  //     try {
  //       const resGetPlaylist = await getPlaylist(accessToken,playlistId);
  //       console.log(resGetPlaylist);
  //       return resGetPlaylist;
  //     } catch (e) {
  //       alert(e)
  //     }  
  //   }
  //   getPlaylistData();
  // },[])  
  return (
    <>
      <div className="playlist__container">
        <div className="title__group">
        </div>
      </div>
    </>
  );
};
export default Playlist;