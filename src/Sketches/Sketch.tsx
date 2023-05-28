import { Link } from "react-router-dom";
import { SketchProps } from "@/types";

export default function Sketch(props: SketchProps) {
  return (
    <div className="Sketch">
      <Link to={props.url} className="Sketch__link">
        {props.image ? (
          <img src={props.image} alt="This is an image of a code sketch." />
        ) : ( 
          <div className="Sketch__placeholder">{
              props.title ? 
              props.title :
              "Untitled Sketch"
            }</div>
        )}
      </Link>
    </div>
  )
}