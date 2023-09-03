import "./Navbar.scss";

export default function Navbar(props) {
  return (
    <div className="Navbar">
      <div className="Navbar__logo">
        <div className="Navbar__icon"></div>
      </div>
      <div className="Navbar__routeInfo">RouteInfo</div>
      <div className="Navbar__appIcons">AppIcons</div>
    </div>
  )
}