import { Link } from "react-router-dom";
import './PlaceholderSketch.scss'

export default function PlaceholderSketch() {
  return (
    <div className="PlaceholderSketch">
      <h1>PlaceholderSketch</h1>
      <Link to="/code-sketches">Go Back</Link>
    </div>
  )
}