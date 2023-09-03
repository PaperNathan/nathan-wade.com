import "@/main.scss";
import './App.scss'

import { useState } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '@/components/Navbar/Navbar';
import IconBar from '@/components/IconBar/IconBar';
import SidebarMenu from '@/components/SidebarMenu/SidebarMenu';
import FileNavigation from "@/components/SidebarMenu/FileNavigation/FileNavigation";
import Infobar from "@/components/Infobar/Infobar";

export default function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [sidebarContent, setSidebarContent] = useState(<FileNavigation />)

  const handleClick = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <div className="App">
      <Navbar className="App__navbar" />
      <div className="App__layout">
        <IconBar className="App__iconbar" />
        <SidebarMenu className="App__sidebar" show={showSidebar}>
          {sidebarContent}
        </SidebarMenu>
        <div className="App__main">
          <Outlet />
        </div>
      </div>  
      <Infobar />    
    </div>
  )
}
