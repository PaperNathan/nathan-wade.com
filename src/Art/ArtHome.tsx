import './Art.scss'
import { Link } from "react-router-dom";

export default function ArtHome() {
  return (
    <div className="ArtHome">
      <h1>Art</h1>
      <Link to="/">Go Back</Link>
    </div>
  )
}
