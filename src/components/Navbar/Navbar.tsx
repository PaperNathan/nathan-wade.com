import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { Popover } from "antd";
import Icon from "./Icon/Icon";
import { Github, Linkedin, Spotify, DiceD20, Dev, Codepen } from "@ricons/fa";
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
        <Link to="/">
          <div className="Navbar__icon">
            <DiceD20 />
          </div>
        </Link>
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
        <Icon url="https://github.com/PaperNathan" icon={<Github />} />
        <Icon url="https://codepen.io/PaperNathan" icon={<Codepen />} />
        <Icon url="https://www.linkedin.com/in/nathanwade-/" icon={<Linkedin />} />
        <Icon url="https://open.spotify.com/user/1295192359" icon={<Spotify />} />
      </div>
    </div>
  )
}
