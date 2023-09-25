import type { ReactNode } from 'react';

export type IconType = "fileNavigation" | "option2" | "option3" | "testPages" | "option5" | "closed";

export type ViewingMode = "reader" | "dev";

export type OS = "mac" | "other";

export interface AppState {
  viewingMode: ViewingMode;
  icon: IconType;
  showSidebar: boolean;
  sidebarContent: ReactNode | undefined;
  showCommandPalette: boolean;
}