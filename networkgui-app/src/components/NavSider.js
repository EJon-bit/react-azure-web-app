import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../node_modules/antd/dist/antd.css';
import '../cssComponents/Sider.css';
import {Layout, Input, Menu, Badge} from 'antd';
import {
  DeploymentUnitOutlined,
  BellOutlined,
  MoneyCollectOutlined,  
  BuildOutlined,
  SettingOutlined,
  ToolOutlined,
  LinkOutlined
} from '@ant-design/icons';

const {Sider} = Layout;
const { SubMenu } = Menu;
const {Search}=Input;

const onSearch = value => console.log(value);

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
          <Search placeholder="input search text" onSearch={onSearch} enterButton />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<BellOutlined style={{fontSize:'20px'}}><Badge size="small" count={5} offset={[-2, -10]}/></BellOutlined>}>              
              <NavLink to="/notices">                              
                Notifications
              </NavLink>
            </Menu.Item>

            <SubMenu key="sub1" icon={<BuildOutlined style={{fontSize:'20px'}}/>} title="Available Operations">
              <Menu.Item key="2"> <NavLink to="/operation1">Operation 1</NavLink> </Menu.Item>
              <Menu.Item key="3"> Operation 2</Menu.Item>
              <Menu.Item key="4">Operation 3</Menu.Item>
              {/* <Menu.Item key="5">Submitted Jobs</Menu.Item>
              <Menu.Item key="5">Current Jobs</Menu.Item> */}
            </SubMenu>

            <Menu.Item key="5" icon={<LinkOutlined style={{fontSize:'20px'}}/>}>
            <NavLink to="/PopLinks">Popular Links</NavLink>
            </Menu.Item>
           
            <SubMenu key="sub2" icon={<ToolOutlined style={{fontSize:'20px'}}/>} title="Tools & Jobs">
              <Menu.Item key="6"> <NavLink to="/createJob">Create Job</NavLink> </Menu.Item>              
              <Menu.Item key="7"><NavLink to="/jobsSubmitted">Submitted Jobs</NavLink></Menu.Item>
              <Menu.Item key="8"><NavLink to="/currentJobs">Current Jobs</NavLink></Menu.Item>
            </SubMenu>
            
            <Menu.Item key="9" icon={<MoneyCollectOutlined style={{fontSize:'20px'}}/>}>
              Tariff Simulation Testing
            </Menu.Item>

            <Menu.Item key="10" icon={<DeploymentUnitOutlined style={{fontSize:'20px'}}/>}>
              <NavLink to="/network">Network Diagram</NavLink>
            </Menu.Item>

            <Menu.Item key="11" icon={<SettingOutlined style={{fontSize:'20px'}}/>}>
              <NavLink to="/config">Configurations</NavLink>
            </Menu.Item>
          </Menu>
        </Sider>      
    );
  }
}
export default SiderNav
