import React from 'react';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import '../../../cssComponents/operations.scoped.css'
import ActivityTable from './ActivityTable'
import {Dropdown, Menu, Card, Drawer} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, DeleteOutlined, FileAddOutlined, InteractionOutlined} from '@ant-design/icons';
import Editor from '@monaco-editor/react';
import { Link } from 'react-router-dom';
const { Meta } = Card;

class Operation extends React.Component{
    state = { 
        visible: false,
        opName:this.props.opPath,
        editor:false,
        scripts:[
            {
                name:"Script Name",
                description:"Parses X and Produces Y",
                nodeLocation:"MINSAT",
                content:"iuiujm",
                readOnly:true,
                attachments:{
                    inputs:[{

                    }],
                    outputs:[{

                    }]
                }
            },
            {
                name:"Script Name",
                description:"sauihfjcm",
                nodeLocation:"EMA",
                content:"iuiujm",
                readOnly:false,
                attachments:{
                    inputs:[{

                    }],
                    outputs:[{

                    }]
                }
            },
            {
                name:"Script Name",
                description:"sauihfjcm",
                nodeLocation:"EMA",
                content:"iuiujm",
                readOnly:false,
                attachments:{
                    inputs:[{

                    }],
                    outputs:[{

                    }]
                }
            }

        ]     
    };
    
    showDrawer = () => {
        this.setState({visible: true});
    };

    onClose = () => {
        this.setState({visible: false});
    };
   
    handleMenuClick=({key})=>{
       this.setState({visible:true});        
    }
    
    

    render(){
        var menu = (
            <Menu onClick={this.handleMenuClick}>
              <Menu.Item key="1" icon={<FileAddOutlined />}>
                Attachments
              </Menu.Item>
              <Menu.Item key="2" icon={<InteractionOutlined />}>
                Related Jobs
              </Menu.Item>
              <Menu.Item key="3" icon={<DeleteOutlined />}>
                Remove Script
              </Menu.Item>
            </Menu>
        );

        // var option = ()=>{
        //     return({readOnly:this.state.scripts[0].readOnly})
        // } 
        var showFiles=this.state.scripts.map((script, index) =>{
            return(
                <Col key={`attach-${index}`} span={8}>                        
                    <Card id="attachments"                                                           
                        actions={[                                                                                                 
                            <EditOutlined onClick={this.showDrawer} key="edit" />,                                                  
                            <Dropdown overlay={menu}>
                                <EllipsisOutlined key="ellipsis" />
                            </Dropdown>,
                            <Link id="configLink" to="/config"><SettingOutlined key="setting" /></Link>                                                                  
                        ]}>
                        <Meta                            
                            title={script.name}
                            description={`${script.description} \n Location: ${script.nodeLocation}`}/>
                    </Card>                     
                </Col>
            );
        
        });    


        return(
            <div>
                <Card title="Scripts">
                    <Row gutter={35}>                                      
                        {showFiles}
                    </Row>    
                </Card>

                <Card title="Acitivty Log">                  
                    <Row>
                        <Col flex={5}>                        
                            <ActivityTable/>                        
                        </Col>
                    </Row>   
                </Card>

                <Drawer
                    width={800}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}>
                    <Editor 
                        height="50vh" 
                        language="javascript" 
                        value={'var thing = sumn'} 
                        theme='dark' 
                        />;
                </Drawer>
            </div>
        );
    }
}

export default Operation;