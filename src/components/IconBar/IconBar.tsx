import "./IconBar.scss"

import type { IconType } from '@/models/AppTypes';

import { 
  ContentCopyRound, 
  SearchSharp, 
  ForumOutlined,
  SettingsSharp,
} from "@ricons/material";
import { Wrench, Inbox } from "@ricons/fa";
import { HTMLAttributes } from "react";

type IconBarProps = HTMLAttributes<HTMLDivElement> & {
  icon: string,
  updateIcon: (name: IconType) => void;
}

export default function IconBar(props: IconBarProps) {
  const handleClick = (name: IconType) => {
    if (name === props.icon) {
      props.updateIcon("closed");
    } else {
      props.updateIcon(name);
    }
  }

  return (
    <div className="IconBar">
      <div className="IconBar__top">
        <div className={`IconBar__icon ${props.icon === "fileNavigation" ? "active" : ""}`} onClick={() => handleClick("fileNavigation")}>
          <ContentCopyRound />
        </div>
        <div className={`IconBar__icon ${props.icon === "option2" ? "active" : ""}`} onClick={() => handleClick("option2")}>
          <SearchSharp />
        </div>
        <div className={`IconBar__icon ${props.icon === "option3" ? "active" : ""}`} onClick={() => handleClick("option3")}>
          <ForumOutlined />
        </div>
      </div>
      <div className="IconBar__bottom">
        <div className={`IconBar__icon ${props.icon === "testPages" ? "active" : ""}`} onClick={() => handleClick("testPages")}>
          <Wrench />
        </div>
        <div className={`IconBar__icon ${props.icon === "option5" ? "active" : ""}`} onClick={() => handleClick("option5")}>
          <Inbox />
        </div>
      </div>
    </div>
  )
}