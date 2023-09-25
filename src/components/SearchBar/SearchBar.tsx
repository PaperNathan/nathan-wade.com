import "./SearchBar.scss";
import { useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "@ricons/fa";
import type { HTMLAttributes } from "react";

type SearchBarProps = HTMLAttributes<HTMLDivElement> & {
  toggleCommandPalette: () => void,
}

export default function SearchBar({ toggleCommandPalette }: SearchBarProps) {
  const location = useLocation();
  const path = location.pathname.slice(1);

  return (
    <div className="SearchBar">
      <div className="SearchBar__navigation">
        <div className="SearchBar__navigation--button">
          <ArrowLeft style={{ width: "14px" }} />
        </div>
        <div className="SearchBar__navigation--button">
          <ArrowRight style={{ width: "14px" }}  />
        </div>
      </div>
      <div className="SearchBar__search" onClick={ toggleCommandPalette }>
        <div className="SearchBar__routeInfo">{`${ path === "" ? "" : "["+ path +"] - " }Nathan Wade [papernathan@github.io]`}</div>
      </div>
    </div>
  )
}