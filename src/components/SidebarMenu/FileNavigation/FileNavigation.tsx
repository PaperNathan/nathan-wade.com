import "./FileNavigation.scss";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import type { Location } from "react-router-dom";

import useFilenameBuilder from "./useFilenameBuilder";
import {
  KeyboardArrowRightRound,
  KeyboardArrowDownRound
} from "@ricons/material";
import { menuOptions } from "./MenuOptions";

export default function FileNavigation() {
  const [toggleMenu, setToggleMenu] = useState("open");
  const { buildFileDisplay } = useFilenameBuilder();
  const location: Location = useLocation();

  const toggleOpen = () => (toggleMenu === "open") ? setToggleMenu("closed") : setToggleMenu("open");

  const getArrowPosition = () => 
    (toggleMenu === "open")
      ? <KeyboardArrowDownRound className="FileNavigation__arrow" />
      : <KeyboardArrowRightRound className="FileNavigation__arrow" />;

  return (
    <div className="FileNavigation">
      <div className="FileNavigation__title" onClick={ toggleOpen }>
        { getArrowPosition() }
        NATHAN.WADE [CV]
      </div>
      <div className={`FileNavigation__files--${ toggleMenu }`}>
        { menuOptions.map((option, key) => buildFileDisplay(location, key, option)) }
      </div>
    </div>
  )
}
