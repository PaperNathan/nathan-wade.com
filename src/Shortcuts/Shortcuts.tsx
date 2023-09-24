import "@/shared/styles/typography.scss";

type OS = "mac" | "other";

export default function Shortcuts() {
  const os: OS = navigator.userAgent.indexOf("Mac") !== -1 ? "mac" : "other";
  
  return (
    <div className="Shortcuts">

      <h1>Keyboard Shortcuts</h1>
      <p>
        <span className="type__code">{os === "mac" ? "Cmd" : "Ctrl"} + K</span> - Opens command palette
      </p>
      <p>
        <span className="type__code">{os === "mac" ? "Cmd" : "Ctrl"} + B</span> - Opens sidebar menu
      </p>
    </div>
  )
}
