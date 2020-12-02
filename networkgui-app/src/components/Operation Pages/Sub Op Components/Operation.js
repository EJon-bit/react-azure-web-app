import React from 'react';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import '../../../cssComponents/operations.scoped.css'
import ActivityTable from './ActivityTable'
import {Card, Drawer} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


const { Meta } = Card;

class Operation extends React.Component{
    state = { 
        visible: false,
        opName:this.props.opPath,
        attachments:[
            {
                name:"File Name",
                description:"sauihfjcm",
                content:"iuiujm",
            },
            {
                name:"File Name",
                description:"sauihfjcm",
                content:"iuiujm",
            },
            {
                name:"File Name",
                description:"sauihfjcm",
                content:"iuiujm",
            }

        ]     
    };
    
    showDrawer = () => {
        this.setState({
        visible: true,
        });
    };

    onClose = () => {
        this.setState({
        visible: false,
        });
    };
    
    

    render(){
        var showFiles=this.state.attachments.map((attachment, index) =>{
            return(
                <Col key={`attach-${index}`} flex={5}>                        
                    <Card id="attachments"                                                           
                        actions={[                                   
                            <SettingOutlined onClick={this.showDrawer} key="setting" />,                                                                       
                            <EditOutlined onClick={this.showDrawer} key="edit" />,                                                  
                            <EllipsisOutlined onClick={this.showDrawer} key="ellipsis" />                                                                   
                        ]}>
                        <Meta                            
                            title={attachment.name}
                            description={attachment.description}/>
                    </Card>                     
                </Col>
            );
        
        });    


        return(
            <div>
                <Card title="Related Files for Upload">
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
                    width={640}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}>
                </Drawer>
            </div>
        );
    }
}

export default Operation;