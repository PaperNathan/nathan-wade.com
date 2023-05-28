import './Sketches.scss'
import { Link } from "react-router-dom";
import Sketch from "./Sketch.tsx";

export default function SketchesHome() {
  return (
    <div className="SketchesHome">
      <h1>Code Sketches</h1>
        <div className="SketchesHome__sketches">
          <Sketch url="/code-sketches/sketch" />
          <Sketch url="/code-sketches/sketch" />
          <Sketch url="/code-sketches/sketch" />
          <Sketch url="/code-sketches/sketch" />
          <Sketch url="/code-sketches/sketch" />
          <Sketch url="/code-sketches/sketch" />
          <Sketch url="/code-sketches/sketch" />
          <Sketch url="/code-sketches/sketch" />
          <Sketch url="/code-sketches/sketch" />
          <Sketch url="/code-sketches/sketch" />
          <Sketch url="/code-sketches/sketch" />
        </div>
      <Link to="/">Go Back</Link>
    </div>
  )
}
