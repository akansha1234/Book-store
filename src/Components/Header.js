import React from "react";
import fire from "../Config/firebase";
import Lottie from "react-lottie";
import animationData from "../lotties/reading-in-header";
import Avatar from "@material-ui/core/Avatar";
import { GoogleLogout } from "react-google-login";
import Search from "./Search";
const Header = ({ query, setQuery, setLogin, login }) => {
  const SignOut = () => {
    fire
      .auth()
      .signOut()
      .then((u) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const responseGoogleout = (response) => {
    console.log(response);
    setLogin(false);
  };
  return (
    <div className="header-page">
      {login ? (
        <GoogleLogout
          clientId="720220762466-3nfp1vc5ahbm22tc6947nmuqang24oaq.apps.googleusercontent.com"
          onSuccess={responseGoogleout}
          onFailure={responseGoogleout}
          buttonText="LogOut"
        />
      ) : (
        <Avatar src="/broken-image.jpg" onClick={SignOut} />
      )}
      <div className="header">
        <div className="heading">
          {/* <button onClick={SignOut}>Sign out</button> */}
          <h1>
            Let's go
            <br /> to the world of imagination!!
          </h1>
          <Search query={query} setQuery={setQuery} />
        </div>
        <Lottie
          options={defaultOptions}
          height={400}
          max-width={600}
          className="lottie"
        />
      </div>
    </div>
  );
};
export default Header;
