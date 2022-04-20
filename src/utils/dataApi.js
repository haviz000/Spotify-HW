import axios from "axios";
import config from "./Config";

export const searchTrack = async (query, accessToken) => {
  const requestOptions = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  const response = await axios.get(
    `${config.SPOTIFY_BASE_URL}/search?type=track&q=${query}`,
    requestOptions
  );

  return response.data;
};

export const createPlaylist = async (
  accessToken,
  userId,
  { name, description }
) => {
  const data = JSON.stringify({
    name,
    description,
    public: false,
    collaborative: false,
  });

  const requestOptions = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    `${config.SPOTIFY_BASE_URL}/users/${userId}/playlists`,
    data,
    requestOptions
  );

  return response.data;
};

export const addToPlaylist = async (accessToken, playlistId, uris) => {
  const data = JSON.stringify({
    uris,
  });

  const requestOptions = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    `${config.SPOTIFY_BASE_URL}/playlists/${playlistId}/tracks`,
    data,
    requestOptions
  );

  return response.data;
};

export const getPlaylist = async (accessToken) => {
  const requestOptions = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  const response = await axios.get(
    `${config.SPOTIFY_BASE_URL}/users/${process.env.react_app_spotify_user_id}/playlist`,
    requestOptions
  );

  return response;
};
