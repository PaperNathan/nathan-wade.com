import "./IconBar.scss"
import { ContentCopyRound, SearchSharp, ForumOutlined } from "@ricons/material";
import { HTMLAttributes } from "react";

import type { IconType } from '@/models/AppTypes';

type IconBarProps = HTMLAttributes<HTMLDivElement> & {
  icon: string,
  updateIcon: (name: IconType) => void;
}

export default function IconBar(props: IconBarProps) {
  const handleClick = (name: IconType) => {
    if (name === props.icon) {
      props.updateIcon("" as IconType);
    } else {
      props.updateIcon(name);
    }
  }

  return (
    <div className="IconBar">
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
  )
}