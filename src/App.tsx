import "@/main.scss";
import './App.scss';

import type { IconType, AppState } from '@/models/AppTypes';
import type { ReactNode } from 'react';

import { useEffect, useCallback, useRef, useReducer } from 'react';
import { Outlet } from "react-router-dom";

import Resume from "@/components/Resume/Resume";
import Navbar from '@/components/Navbar/Navbar';
import IconBar from '@/components/IconBar/IconBar';
import SidebarMenu from '@/components/SidebarMenu/SidebarMenu';
import FileNavigation from "@/components/SidebarMenu/FileNavigation/FileNavigation";
import Infobar from "@/components/Infobar/Infobar";

import { fileSystemMenuOptions } from "@/components/MenuOptions/FileNavigationMenuOptions";
import { jobHistoryMenuOptions } from "./components/MenuOptions/JobHistoryMenuOptions";
import { testPagesMenuOptions } from "@/components/MenuOptions/TestPagesMenuOptions";
import { sandboxMenuOptions } from "./components/MenuOptions/sandboxMenuOptions";
import { AppReducer } from "@/store/AppStore";

const initialState: AppState = {
  icon: "closed",
  showSidebar: false,
  sidebarContent: <FileNavigation title="NATHAN.WADE [CV]" menuOptions={ fileSystemMenuOptions } />,
  showCommandPalette: false,
  showResume: false,
};

export default function App() {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // on mount
  useEffect(() => {
    window.addEventListener('beforeprint', () => dispatch({ type: "TOGGLE_RESUME", payload: true }));
    window.addEventListener('afterprint', () => dispatch({ type: "TOGGLE_RESUME", payload: false }));

    return () => {
      window.removeEventListener('beforeprint', () => dispatch({ type: "TOGGLE_RESUME", payload: true }));
      window.removeEventListener('afterprint', () => dispatch({ type: "TOGGLE_RESUME", payload: false }));
    }
  }, []);

  // Effect to run on icon update but not on mount
  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current) {
      const sidebarActiveContent: Record<IconType, ReactNode> = {
        fileNavigation: <FileNavigation title="NATHAN.WADE [CV]" menuOptions={ fileSystemMenuOptions } />,
        jobHistory: <FileNavigation title="Job History" menuOptions={ jobHistoryMenuOptions } />, 
        testPages: <FileNavigation title="Test Pages" menuOptions={ testPagesMenuOptions } />,
        sandbox: <FileNavigation title="Sandbox" menuOptions={ sandboxMenuOptions } />,
        closed: null
      };
      dispatch({ type: "SET_SIDEBAR", payload: !!sidebarActiveContent[state.icon] });
      dispatch({ type: "SET_SIDEBAR_CONTENT", payload: sidebarActiveContent[state.icon] ? sidebarActiveContent[state.icon] : undefined })
    } else {
      isMounted.current = true;
    }
  }, [state.icon]);

  const handleKeyPress = useCallback((e: any) => {
    // Command Palette
    if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      if (state.showCommandPalette) {
        dispatch({ type: "TOGGLE_COMMAND_PALETTE", payload: false });
      } else {
        dispatch({ type: "TOGGLE_COMMAND_PALETTE", payload: true });
      }
    }

    if (e.key === "Escape") {
      dispatch({ type: "SET_COMMAND_PALETTE", payload: false });
    }

    // Sidebar
    if (e.key === "b" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      if (state.icon === "closed") {
        dispatch({ type: "SET_ICON", payload: "fileNavigation" });
        dispatch({ type: "SET_SIDEBAR", payload: true });
      } else {
        dispatch({ type: "SET_ICON", payload: "closed" });
        dispatch({ type: "SET_SIDEBAR", payload: false });
      }
    }
  }, [state]);
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  // State Mutations
  const updateIcon = (name: IconType) => {
    dispatch({ type: "SET_ICON", payload: name });
  }

  return (
    <>
      { state.showResume ? 
        <Resume /> :
        <div className="App">
          <Navbar 
            showCommandPalette={ state.showCommandPalette }
            toggleCommandPalette={ () => dispatch({ type: "TOGGLE_COMMAND_PALETTE" }) }
          />
          <div className="App__layout">
            <IconBar icon={ state.icon } updateIcon={ updateIcon } />

            <SidebarMenu show={ state.showSidebar }>
              { state.sidebarContent }
            </SidebarMenu>

            <div className="App__main" style={ state.showSidebar ? {} : { gridColumnEnd: "span 2" } }>
              <Outlet />
            </div>

          </div>  
          <Infobar />
        </div>
      }
    </>
  )
}
