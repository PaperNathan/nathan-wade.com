import type { ReactNode } from "react";
type SidebarMenuLinkProps = {
  children: ReactNode,
}

export default function SidebarMenuLink(props: SidebarMenuLinkProps) {
  return (
    <div className="SidebarMenuLink">
      {props.children}
    </div>
  )
}
