import "./FileNavigation.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  InsertDriveFileOutlined, 
  PersonFilled,
  KeyboardArrowRightRound,
  KeyboardArrowDownRound
} from "@ricons/material";

export default function FileNavigation() {
  const [toggleMenu, setToggleMenu] = useState("open");

  const toggleOpen = () => {
    if (toggleMenu === "open") {
      setToggleMenu("closed");
    } else {
      setToggleMenu("open");
    }
  }

  const getArrowPosition = () => {
    if (toggleMenu === "open") {
      return <KeyboardArrowDownRound className="FileNavigation__arrow" />
    } else {
      return <KeyboardArrowRightRound className="FileNavigation__arrow" />
    }
  }

  return (
    <div className="FileNavigation">
      <div className="FileNavigation__title" onClick={ toggleOpen }>
        { getArrowPosition() }
        NATHAN.WADE [CV]
      </div>
      <div className={`FileNavigation__files--${ toggleMenu }`}>
        <div className="FileNavigation__fileLink">
          <PersonFilled className="FileNavigation__fileLink--icon" />
          <Link to="/" className="FileNavigation__fileLink--text">nathan.yml</Link>
        </div>
        <div className="FileNavigation__fileLink">
          <InsertDriveFileOutlined className="FileNavigation__fileLink--icon" />
          <Link to="/about" className="FileNavigation__fileLink--text">README.md</Link>
        </div>
      </div>
    </div>
  )
}
