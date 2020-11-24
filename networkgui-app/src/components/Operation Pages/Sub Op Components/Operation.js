import React from 'react';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import '../../../cssComponents/operations.css'
import ActivityTable from './ActivityTable'
import {Card} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

class Operation extends React.Component{
    render(){
        return(
            <div>
                <Card title="Related Files for Upload">
                    <Row gutter={35}>
                        <Col flex={5}>                        
                            <Card id="attachments"                                                          
                                actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <EllipsisOutlined key="ellipsis" />,
                                ]}>
                                <Meta                            
                                title=" File Name"
                                description="File description"/>
                            </Card>                     
                        </Col>
                        <Col flex={5}>                        
                            <Card id="attachments"                                                          
                                actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <EllipsisOutlined key="ellipsis" />,
                                ]}>
                                <Meta                            
                                title="File Name"
                                description="File description"/>
                            </Card>                     
                        </Col>
                        <Col flex={5}>                        
                            <Card id="attachments"                                                          
                                actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <EllipsisOutlined key="ellipsis" />,
                                ]}>
                                <Meta                            
                                title="File Name"
                                description="File description"/>
                            </Card>                     
                        </Col>
                    </Row>    
                </Card>

                <Card title="Acitivty Log">                  
                    <Row>
                        <Col flex={5}>                        
                            <ActivityTable/>                        
                        </Col>
                    </Row>   
                </Card>
            </div>
        );
    }
}

export default Operation;