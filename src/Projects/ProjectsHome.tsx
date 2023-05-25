import './Projects.scss'
import { Link } from "react-router-dom";

export default function ProjectsHome() {
  return (
    <div className="ProjectsHome">
      <h1>Projects</h1>
      <Link to="/">Go Back</Link>
    </div>
  )
}
