import "@/main.scss";
import './Dev.scss';

import type { IconType } from '@/models/AppTypes';
import type { ReactNode } from 'react';
import type { ViewingMode } from "@/models/AppTypes";

import { useState, useEffect, useCallback, useRef } from 'react';
import { Outlet } from "react-router-dom";

import Navbar from '@/components/Navbar/Navbar';
import IconBar from '@/components/IconBar/IconBar';
import SidebarMenu from '@/components/SidebarMenu/SidebarMenu';
import FileNavigation from "@/components/SidebarMenu/FileNavigation/FileNavigation";
import Option2 from "@/components/SidebarMenu/Option2/Option2";
import Option3 from "@/components/SidebarMenu/Option3/Option3";
import Infobar from "@/components/Infobar/Infobar";

import { fileSystemMenuOptions } from "@/components/MenuOptions/FileNavigationMenuOptions";
import { testPagesMenuOptions } from "@/components/MenuOptions/TestPagesMenuOptions";

export default function App() {
  const [icon, setIcon] = useState<IconType>("fileNavigation");
  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebarContent, setSidebarContent] = useState<ReactNode>(<FileNavigation title="NATHAN.WADE [CV]" menuOptions={ fileSystemMenuOptions } />)
  const [viewingMode, setViewingMode] = useState<ViewingMode>("reader");

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const sidebarActiveContent: Record<IconType, ReactNode> = {
        fileNavigation: <FileNavigation title="NATHAN.WADE [CV]" menuOptions={ fileSystemMenuOptions } />,
        option2: <Option2 />, 
        option3: <Option3 />,
        testPages: <FileNavigation title="TEST PAGES" menuOptions={ testPagesMenuOptions } />,
        option5: <Option3 />,
        closed: null
      };
      setShowSidebar(!!sidebarActiveContent[icon]);
      setSidebarContent(sidebarActiveContent[icon] ? sidebarActiveContent[icon] : null)
    } else {
      isMounted.current = true;
    }
  }, [icon]);

    const handleKeyPress = useCallback((e: any) => {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        console.log("control + enter clicked");
      }
    }, []);
  
    useEffect(() => {
      document.addEventListener('keydown', handleKeyPress);
  
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }, [handleKeyPress]);

  const updateIcon = (name: IconType) => {
    setIcon(name);
  }

  const updateViewingMode = () => {
    setViewingMode(() => viewingMode === "reader" ? "dev" : "reader");
  }

  return (
    <div className="DevView">
      <Navbar viewingMode={ viewingMode } updateViewingMode={ updateViewingMode } />
      <div className="DevView__layout">
        <IconBar icon={ icon } updateIcon={ updateIcon } />
        <SidebarMenu show={ showSidebar }>
          { sidebarContent }
        </SidebarMenu>

        <div className="DevView__main" style={ showSidebar ? {} : { gridColumnEnd: "span 2" } }>
          <Outlet context={{ viewingMode }} />
        </div>

      </div>  
      <Infobar />    
    </div>
  )
}