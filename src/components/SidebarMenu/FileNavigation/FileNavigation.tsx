import "./FileNavigation.scss";
import { Link } from "react-router-dom";
import { 
  InsertDriveFileOutlined, 
  PersonFilled 
} from "@ricons/material";
import SidebarMenuLink from "@/components/SidebarMenu/SidebarMenuLink/SidebarMenuLink";

export default function FileNavigation() {
  return (
    <div className="FileNavigation">
      <SidebarMenuLink>
        <PersonFilled className="SidebarMenuLink__icon" />
        <Link to="/" className="SidebarMenuLink__link">nathan.yml</Link>
      </SidebarMenuLink>
      <SidebarMenuLink>
        <InsertDriveFileOutlined className="SidebarMenuLink__icon" />
        <Link to="/about" className="SidebarMenuLink__link">README.md</Link>
      </SidebarMenuLink>
    </div>
  )
}
