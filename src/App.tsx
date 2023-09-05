import "@/main.scss";
import './App.scss'

import type { IconType } from '@/models/AppTypes';

import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import IconBar from '@/components/IconBar/IconBar';
import SidebarMenu from '@/components/SidebarMenu/SidebarMenu';
import FileNavigation from "@/components/SidebarMenu/FileNavigation/FileNavigation";
import Option2 from "./components/SidebarMenu/Option2/Option2";
import Option3 from "./components/SidebarMenu/Option3/Option3";
import Infobar from "@/components/Infobar/Infobar";

export default function App() {
  const [icon, setIcon] = useState<IconType>("fileNavigation");
  const [showSidebar, setShowSidebar] = useState(true);

  const [sidebarContent, setSidebarContent] = useState<ReactNode>(<FileNavigation />)
  const [readerMode, setReaderMode] = useState(false);

  useEffect(() => {
    const sidebarActiveContent: Record<IconType, ReactNode> = {
      fileNavigation: <FileNavigation />,
      option2: <Option2 />, 
      option3: <Option3 />
    };
    setShowSidebar(!!sidebarActiveContent[icon]);
    setSidebarContent(sidebarActiveContent[icon] ? sidebarActiveContent[icon] : null)
  }, [icon])

  const updateIcon = (name: IconType) => {
    setIcon(name);
  }

  const updateReaderMode = () => {
    setReaderMode(!readerMode);
  }

  return (
    <div className="App">
      <Navbar readerMode={ readerMode } updateReaderMode={ updateReaderMode } />
      <div className="App__layout">
        <IconBar icon={ icon } updateIcon={ updateIcon } />
        <SidebarMenu show={ showSidebar }>
          { sidebarContent }
        </SidebarMenu>
        <div className="App__main" style={ showSidebar ? {} : { gridColumnEnd: "span 2" } }>
          <Outlet context={{ readerMode }} />
        </div>
      </div>  
      <Infobar />    
    </div>
  )
}
