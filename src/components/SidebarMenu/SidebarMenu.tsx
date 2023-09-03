import './SidebarMenu.scss';
import { Link } from "react-router-dom";
import { 
  InsertDriveFileOutlined, 
  PersonFilled 
} from "@ricons/material";
import SidebarMenuLink from "./SidebarMenuLink/SidebarMenuLink";

export default function SidebarMenu(props) {
  return (
    <>
      { props.show ?
        <div className="SidebarMenu">
          { props.bool ? <div>Hey</div> : <></> }
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
