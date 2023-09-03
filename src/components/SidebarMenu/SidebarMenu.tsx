import './SidebarMenu.scss';
import { Link } from "react-router-dom";
import { 
  InsertDriveFileOutlined, 
  PersonFilled 
} from "@ricons/material";
import SidebarMenuLink from "./SidebarMenuLink/SidebarMenuLink";
import type { ReactNode, HTMLAttributes } from "react";


type SidebarMenuProps = HTMLAttributes<HTMLDivElement> & {
  show: boolean,
  children: ReactNode,
}

export default function SidebarMenu(props: SidebarMenuProps) {
  return (
    <>
      { props.show ?
        <div className="SidebarMenu">
          <SidebarMenuLink>
            <PersonFilled className="SidebarMenuLink__icon" />
            <Link to="/" className="SidebarMenuLink__link">nathan.yaml</Link>
          </SidebarMenuLink>
          <SidebarMenuLink>
            <InsertDriveFileOutlined className="SidebarMenuLink__icon" />
            <Link to="/about" className="SidebarMenuLink__link">README.md</Link>
          </SidebarMenuLink>
        </div>
        : null
      }
    </>
  )
}
