import './Sketches.scss'
import { Link } from "react-router-dom";

export default function SketchesHome() {
  return (
    <div className="SketchesHome">
      <h1>Sketches</h1>
      <Link to="/">Go Back</Link>
    </div>
  )
}
