import { useOutletContext } from "react-router-dom";
import type { ViewingMode } from "@/models/AppTypes";

export function useViewingMode() {
  return useOutletContext<ViewingMode>();
}