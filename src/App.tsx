import './App.scss'
import Sidebar from './components/Sidebar/Sidebar';
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div className="App__content">
        <Outlet />
      </div>
    </div>
  )
}
