import type { AppState } from '@/models/AppTypes';

export type AppActionType = 'SET_VIEWING_MODE' | 'SET_ICON' | 'TOGGLE_SIDEBAR' | 'SET_SIDEBAR_CONTENT' | "TOGGLE_MODAL";

interface AppAction {
  type: AppActionType;
  payload: any;
}

export function AppReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "SET_VIEWING_MODE":
      return { ...state, viewingMode: action.payload };
    case "SET_ICON":
      return { ...state, icon: action.payload };
    case "TOGGLE_SIDEBAR":
      return { ...state, showSidebar: action.payload };
    case "SET_SIDEBAR_CONTENT":
      return { ...state, sidebarContent: action.payload };
    case "TOGGLE_MODAL":
      return { ...state, showModal: action.payload };
    default:
      throw new Error("App.tsx - Invalid action type on reducer.");
  }
}
