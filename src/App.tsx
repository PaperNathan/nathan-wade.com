import "@/main.scss";
import './App.scss';

import type { IconType, ViewingMode } from '@/models/AppTypes';
import type { ReactNode } from 'react';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Outlet } from "react-router-dom";
import { Input, Modal } from "antd";

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
  const [icon, setIcon] = useState<IconType>("closed");
  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebarContent, setSidebarContent] = useState<ReactNode>(<FileNavigation title="NATHAN.WADE [CV]" menuOptions={ fileSystemMenuOptions } />)
  const [viewingMode, setViewingMode] = useState<ViewingMode>("reader");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      showModal();
    }

    if (e.key === "b" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      if (icon === "closed") {
        setIcon("fileNavigation");
        setShowSidebar(true);
      } else {
        setIcon("closed");
        setShowSidebar(false);
      }
    }
  }, [icon]);
  
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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Navbar viewingMode={ viewingMode } updateViewingMode={ updateViewingMode } />
      <div className="App__layout">
        <IconBar icon={ icon } updateIcon={ updateIcon } />

        <SidebarMenu show={ showSidebar }>
          { sidebarContent }
        </SidebarMenu>

        <div className="App__main" style={ showSidebar ? {} : { gridColumnEnd: "span 2" } }>
          <Outlet context={{ viewingMode }} />
        </div>

      </div>  
      <Infobar />
      <Modal title="Search..." open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder="Search..." />
      </Modal>
    </div>
  )
}
