import './Home.scss';
import { useReaderMode } from "@/AppUtils";

export default function Home() {
  const { readerMode } = useReaderMode();
  return (
    <div className="Home">
      <h1>Home</h1>
      <p>{ readerMode ? "Reader Mode Enabled" : "Reader Mode Not Enabled" }</p>
    </div>
  )
}
