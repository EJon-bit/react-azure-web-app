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

            <SubMenu key="sub1" icon={<UserOutlined />} title="Available Operations">
              <Menu.Item key="2"> <NavLink to="/operation1">Operation 1</NavLink> </Menu.Item>
              <Menu.Item key="3"> Operation 2</Menu.Item>
              <Menu.Item key="4">Operation 3</Menu.Item>
              {/* <Menu.Item key="5">Submitted Jobs</Menu.Item>
              <Menu.Item key="5">Current Jobs</Menu.Item> */}
            </SubMenu>

            <Menu.Item key="5" icon={<FileOutlined />}>
            <NavLink to="/PopLinks">Popular Links</NavLink>
            </Menu.Item>
           
            <SubMenu key="sub2" icon={<UserOutlined />} title="Tools & Jobs">
              <Menu.Item key="6"> <NavLink to="/createJob">Create Job</NavLink> </Menu.Item>              
              <Menu.Item key="7"><NavLink to="/jobsSubmitted">Submitted Jobs</NavLink></Menu.Item>
              <Menu.Item key="8"><NavLink to="/currentJobs">Current Jobs</NavLink></Menu.Item>
            </SubMenu>
            
            <Menu.Item key="9" icon={<FileOutlined />}>
              Tariff Simulation Testing
            </Menu.Item>

            <Menu.Item key="10" icon={<DesktopOutlined />}>
              <NavLink to="/network">Network Diagram</NavLink>
            </Menu.Item>

            <Menu.Item key="11" icon={<DesktopOutlined />}>
              <NavLink to="/config">Configurations</NavLink>
            </Menu.Item>
          </Menu>
        </Sider>      
    );
  }
}
export default SiderNav
