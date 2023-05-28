import { Link } from "react-router-dom";
import { SketchProps } from "@/types";

export default function Sketch(props: SketchProps) {
  return (
    <Link to={props.url} className="Sketch">
      {props.image ? (
        <img src={props.image} alt="This is an image of a code sketch." />
      ) : ( 
        <div className="Sketch__placeholder">No Image Available</div>
      )}
    </Link>
  )
}