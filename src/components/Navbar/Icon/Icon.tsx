import { HTMLAttributes, ReactNode  } from "react";

type IconProps = HTMLAttributes<HTMLDivElement> & {
  url: string,
  icon: ReactNode,
}

export default function Icon(props: IconProps) {
  return (
    <a href={ props.url } target="_blank">
      <div className="Navbar__icon">
        { props.icon }
      </div>
    </a>
  )
}