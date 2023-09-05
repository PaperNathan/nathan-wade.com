import { useOutletContext } from "react-router-dom";
type ContextType = { readerMode: boolean };

export function useReaderMode() {
  return useOutletContext<ContextType>();
}