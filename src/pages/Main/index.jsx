import React, { useEffect } from "react";
import './main.css'
import config from "../../utils/Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../slice/authSlice';
import { useHistory } from "react-router-dom";


const Main = () => {
  const history = useHistory();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch()


  useEffect(() => {
    const accessTokenParams = new URLSearchParams(window.location.hash).get('#access_token');
    if (accessTokenParams !== null) {
      dispatch(login({
        accessToken: accessTokenParams,
        isAuth: true
      }))
      history.push('/create-playlist');
    }
  }, [])


  const getAuthorize = () => {
    const state = Math.random().toFixed(16).split('.')[1];
    const clientId = process.env.react_app_spotify_id;
    return `https://accounts.spotify.com/authorize?response_type=${config.RESPONSE_TYPE}&client_id=${clientId}&redirect_uri=${config.REDIRECT_URI}&state=${state}&scope=${config.SPOTIFY_SCOPE}`;

  };

  return (
    <>
      {
        !isAuth && (
          <div className="login__container">
            <div className="login__logo"></div>
            <p className="login__title">Login for next to Spotify</p>
            <a href={getAuthorize()}>
              <button className="login__btn">
                Login <FontAwesomeIcon className="login__icon" icon={faSignIn} />
              </button>
            </a>
          </div>
        )
      }
    </>
  );
};

export default Main;
