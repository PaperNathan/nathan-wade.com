import "./Infobar.scss";
import { Link } from "react-router-dom";
import { Spotify } from "@ricons/fa";
import FunThings from "./FunThings";

export default function Infobar() {
  return (
    <div className="Infobar">
      <Link to="/stack">
        <div className="Infobar__stack">
          React, TypeScript, Sass, Vite, and GitHub Pages
        </div>
      </Link>
      <div className="Infobar__personal">
        <div className="Infobar__activity">
          
          <div className="Infobar__text">
            Currently { FunThings[Math.floor(Math.random() * FunThings.length)] }
          </div>
        </div>
        <div className="Infobar__spotify">
          <div className="Infobar__icon">
            <Spotify />
          </div>
          TODO: Spotify
        </div>

      </div>
    </div>
  )
}