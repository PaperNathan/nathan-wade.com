import "./Navbar.scss";
import { useLocation } from "react-router-dom";
import { Popover } from "antd";
import { Github, Linkedin, Spotify, Asterisk, Dev } from "@ricons/fa";
import { ChromeReaderModeSharp } from "@ricons/material";
import type { HTMLAttributes } from "react";

type NavbarMenuProps = HTMLAttributes<HTMLDivElement> & {
  readerMode: boolean,
  setReaderMode: (arg0: boolean) => void,
}

export default function Navbar(props: NavbarMenuProps) {
  const location = useLocation();
  const path = location.pathname.slice(1);

  const handleClick = () => {
    props.setReaderMode(!props.readerMode);
  }

  return (
    <div className="Navbar">
      <div className="Navbar__iconContainer">
        <a href="/">
          <div className="Navbar__icon">
            <Asterisk />
          </div>
        </a>
        <Popover content={`Toggle ${props.readerMode ? "Dev" : "Reader"} Mode`} placement="bottomLeft">
          <div className="Navbar__iconContainer" onClick={handleClick}>
            <div className="Navbar__icon">
              { props.readerMode ? <Dev /> : <ChromeReaderModeSharp /> }
            </div>
          </div>
        </Popover>
      </div>

      <div className="Navbar__routeInfo">{`${ path !== "" ? "["+path+"] - " : "" }Nathan Wade [papernathan@github.io]`}</div>
      <div className="Navbar__appIcons">
        <a href="https://github.com/PaperNathan" target="_blank">
          <div className="Navbar__icon">
            <Github />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/nathanwade-/" target="_blank">
          <div className="Navbar__icon">
            <Linkedin />
          </div>
        </a>
        <a href="https://open.spotify.com/user/1295192359" target="_blank">
          <div className="Navbar__icon">
            <Spotify />
          </div>
        </a>
      </div>
    </div>
  )
}
