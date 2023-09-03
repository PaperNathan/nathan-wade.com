import "./IconBar.scss"
import { ContentCopyRound, SearchSharp, ForumOutlined } from "@ricons/material";
import { useState } from "react";

export default function IconBar() {
  return (
    <div className="IconBar">
      <div className="IconBar__icon active">
        <ContentCopyRound />
      </div>
      <div className="IconBar__icon">
        <SearchSharp />
      </div>
      <div className="IconBar__icon">
        <ForumOutlined />
      </div>
    </div>
  )
}