import React from 'react'
import { useSelector } from 'react-redux'

const YourPlaylist = () => {
    const dataPlaylist = useSelector((state) => state.playlist.playlistData);

    console.log(dataPlaylist);
  return (
    <div>YourPlaylist</div>
  )
}

export default YourPlaylist