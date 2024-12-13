import "./header.css";
import { useLocation } from "react-router-dom";
import usernameimg from "../assets/logout.svg";
import logoutwhite from "../assets/logoutwhite.svg";

function Header({ openSignInModal, isLoggedIn, logout, openNavModal }) {
  const location = useLocation();

  const getFontStyle = () => {
    if (location.pathname === "/saved-news") {
      return { color: "black" };
    }
    return { color: "white" };
  };

  return (
    <header className="header" style={getFontStyle()}>
      <p className="header__title">NewsExplorer</p>
      <a className="header__home-button" style={getFontStyle()} href="/">
        Home
      </a>
      {isLoggedIn && location.pathname === "/" ? (
        <>
          <a
            className="header__saved-button"
            href="/final-project-JPCD-frontend/saved-news"
          >
            Saved articles
          </a>
          <div className="header__user-container">
            <button className="header__username" type="submit" onClick={logout}>
              Juan
            </button>
            <img
              className="header__username_img"
              src={logoutwhite}
              alt="username-image"
            ></img>
          </div>
        </>
      ) : (
        <></>
      )}
      {location.pathname === "/saved-news" ? (
        <>
          <button className="saved__article-button" style={getFontStyle()}>
            {" "}
            Saved articles
          </button>
          <div className="header__user-container">
            <button
              className="header__username"
              type="submit"
              onClick={logout}
              style={getFontStyle()}
            >
              Juan
            </button>
            <img
              className="header__username_img"
              src={usernameimg}
              alt="username-image"
            ></img>
          </div>
          <button
            className="header__button-nav-news"
            type="button"
            onClick={openNavModal}
          ></button>
        </>
      ) : (
        <></>
      )}
      {location.pathname === "/" ? (
        <>
          <button
            className="header__button-nav"
            type="button"
            onClick={openNavModal}
          ></button>
        </>
      ) : (
        <></>
      )}
      {location.pathname === "/" && isLoggedIn === false ? (
        <>
          <button
            className="header__signin-button"
            onClick={openSignInModal}
            style={getFontStyle()}
          >
            Sign in
          </button>
        </>
      ) : (
        <></>
      )}
      {/* {isLoggedIn && location.pathname === "/saved-news" ? (
        <>
          {" "}
          <button
            className="header__button-nav-news"
            type="button"
            onClick={openNavModal}
          ></button>
        </>
      ) : (
        <></>
      )} */}
    </header>
  );
}

export default Header;
