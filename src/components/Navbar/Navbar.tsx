import "./Navbar.scss";
import type { ViewingMode } from "@/models/AppTypes";
import type { HTMLAttributes } from "react";

import { Link } from "react-router-dom";
import { Popover } from "antd";
import { Github, Linkedin, Spotify, DiceD20, Dev, Codepen } from "@ricons/fa";
import { ChromeReaderModeSharp } from "@ricons/material";

import Icon from "@/components/Icon/Icon";
import SearchBar from "@/components/SearchBar/SearchBar";
import CommandPalette from "@/components/SearchBar/CommandPalette";

type NavbarMenuProps = HTMLAttributes<HTMLDivElement> & {
  viewingMode: ViewingMode,
  showCommandPalette: boolean,
  updateViewingMode: () => void,
  toggleCommandPalette: () => void,
}

export default function Navbar({ 
  viewingMode, 
  showCommandPalette, 
  updateViewingMode, 
  toggleCommandPalette 
}: NavbarMenuProps) {
  return (
    <div className="Navbar">
      <div className="Navbar__iconContainer">
        <Link to="/">
          <div className="Navbar__icon">
            <DiceD20 />
          </div>
        </Link>
        <Popover content={`Toggle ${viewingMode === "reader" ? "Reader" : "Dev"} Mode`} placement="bottomLeft">
          <div className="Navbar__iconContainer" onClick={ updateViewingMode }>
            <div className="Navbar__icon">
              { viewingMode === "reader" ? <ChromeReaderModeSharp /> : <Dev /> }
            </div>
          </div>
        </Popover>
      </div>

      { showCommandPalette 
        ? <CommandPalette toggleCommandPalette={ toggleCommandPalette } /> 
        : <SearchBar toggleCommandPalette={ toggleCommandPalette } /> }
      
      <div className="Navbar__appIcons">
        <Icon url="https://github.com/PaperNathan" icon={<Github />} />
        <Icon url="https://codepen.io/PaperNathan" icon={<Codepen />} />
        <Icon url="https://www.linkedin.com/in/nathanwade-/" icon={<Linkedin />} />
        <Icon url="https://open.spotify.com/user/1295192359" icon={<Spotify />} />
      </div>
    </div>
  )
}
