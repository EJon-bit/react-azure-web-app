import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../node_modules/antd/dist/antd.css';
import '../cssComponents/Sider.css';
import {Layout, Menu} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,  
  UserOutlined,
} from '@ant-design/icons';

const {Sider} = Layout;
const { SubMenu } = Menu;

class SiderNav extends React.Component {
  state = {
    collapsed: false,
    };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (      
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo"> 
            <NavLink to="/">Vas Ops</NavLink> 
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <NavLink to="/notices">Notifications</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <NavLink to="/config">Configurations</NavLink>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Tools">
              <Menu.Item key="3"> <NavLink to="/createRequest">Create Request</NavLink> </Menu.Item>
              <Menu.Item key="4"> Batch Service Request</Menu.Item>
              <Menu.Item key="5">Schedule Jobs</Menu.Item>
              <Menu.Item key="5">Submitted Jobs</Menu.Item>
              <Menu.Item key="5">Current Jobs</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Popular Links
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Tariff Simulation Testing
            </Menu.Item>
          </Menu>
        </Sider>      
    );
  }
}
export default SiderNav