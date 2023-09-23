import './Home.scss';
import { Github, Linkedin, Spotify, Codepen } from "@ricons/fa";

import Icon from "@/components/Icon/Icon";
import Image from "@/components/Image/Image";

import { useViewingMode } from "@/AppUtils";

export default function Home() {
  const viewingMode = useViewingMode();
  console.log(viewingMode === "reader" ? "Reader Mode Enabled" : "Reader Mode Not Enabled");

  const imgStyle = { borderRadius: "100%"}

  return (
    <div className="Home">
      <Image alt="Random Image" height={200} width={200} style={imgStyle} />
      <h1 className="Home__display">Nathan Wade</h1>
      <p className="Home__subtext">
        Front-end Software Engineer
      </p>
      <div className="Home__info">
        <p>Currently Located in the United States</p>
      </div>
      <div className="Home__contact">
        <Icon url="https://github.com/PaperNathan" icon={<Github />} />
        <Icon url="https://codepen.io/PaperNathan" icon={<Codepen />} />
        <Icon url="https://www.linkedin.com/in/nathanwade-/" icon={<Linkedin />} />
        <Icon url="https://open.spotify.com/user/1295192359" icon={<Spotify />} />
      </div>
    </div>
  )
}
