import type { ReactNode } from 'react';

export type IconType = "fileNavigation" | "option2" | "option3" | "testPages" | "option5" | "closed";

export type OS = "mac" | "other";

export interface AppState {
  icon: IconType;
  showSidebar: boolean;
  sidebarContent: ReactNode | undefined;
  showCommandPalette: boolean;
  showResume: boolean;
}