import "@/main.scss";
import './App.scss'
import Sidebar from './components/Sidebar/Sidebar';
import { Layout } from 'antd';
import { Outlet } from "react-router-dom";

const { Sider, Content } = Layout;

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Sider>
          <Sidebar />
        </Sider>
        <Content className="App__content">
          <Outlet />
        </Content>
      </Layout>      
    </div>
  )
}
