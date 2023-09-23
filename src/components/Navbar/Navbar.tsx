import "./Navbar.scss";
import type { ViewingMode } from "@/models/AppTypes";
import type { HTMLAttributes } from "react";

import { Link, useLocation } from "react-router-dom";
import { Popover } from "antd";
import Icon from "@/components/Icon/Icon";
import { Github, Linkedin, Spotify, DiceD20, Dev, Codepen } from "@ricons/fa";
import { ChromeReaderModeSharp } from "@ricons/material";

type NavbarMenuProps = HTMLAttributes<HTMLDivElement> & {
  viewingMode: ViewingMode,
  updateViewingMode: () => void,
}

export default function Navbar(props: NavbarMenuProps) {
  const location = useLocation();
  const path = location.pathname.slice(1);

  const handleClick = () => {
    props.updateViewingMode();
    
  }

  return (
    <div className="Navbar">
      <div className="Navbar__iconContainer">
        <Link to="/">
          <div className="Navbar__icon">
            <DiceD20 />
          </div>
        </Link>
        <Popover content={`Toggle ${props.viewingMode === "reader" ? "Reader" : "Dev"} Mode`} placement="bottomLeft">
          <div className="Navbar__iconContainer" onClick={handleClick}>
            <div className="Navbar__icon">
              { props.viewingMode === "reader" ? <ChromeReaderModeSharp /> : <Dev /> }
            </div>
          </div>
        </Popover>
      </div>

      <div className="Navbar__routeInfo">{`${ path === "" ? "" : "["+ path +"] - " }Nathan Wade [papernathan@github.io] - VSClone`}</div>
      <div className="Navbar__appIcons">
        <Icon url="https://github.com/PaperNathan" icon={<Github />} />
        <Icon url="https://codepen.io/PaperNathan" icon={<Codepen />} />
        <Icon url="https://www.linkedin.com/in/nathanwade-/" icon={<Linkedin />} />
        <Icon url="https://open.spotify.com/user/1295192359" icon={<Spotify />} />
      </div>
    </div>
  )
}
