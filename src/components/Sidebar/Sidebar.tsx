import './Sidebar.scss'
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="Sidebar">
      <Link to="/">Home</Link>
      <Link to="/code-sketches">Code Sketches</Link>
      <Link to="/art">Art</Link>
      <Link to="/projects">Projects</Link>
    </div>
  )
}

