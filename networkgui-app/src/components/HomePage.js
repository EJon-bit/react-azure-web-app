import { Card, Col, Row } from 'antd';
import {EllipsisOutlined} from '@ant-design/icons'
import React from 'react';
import '../../node_modules/antd/dist/antd.css';
import '../cssComponents/Home.scoped.css'


class HomePage extends React.Component{
    render(){
        return(
            <div>
                <Card title="Frequently Visited Network Apps">
                    <Row gutter={30}>
                        <Col flex={5}> 
                            <Card id="SystemCard" title="System A" 
                                actions={[
                                    <EllipsisOutlined onClick={this.showDrawer} key="ellipsis" />,                                      
                                    <p>Description</p>                                                                  
                                ]}>
                                <Col flex={5}>
                                    <Card id="opCard">
                                        Operation 1
                                    </Card>
                                    <Card id="opCard">
                                        Operation 2
                                    </Card>
                                </Col>                                
                            </Card>
                        </Col>

                        <Col flex={5}> 
                            <Card id="SystemCard" title="System B">
                                Link
                            </Card>
                        </Col>

                        <Col flex={5}> 
                            <Card id="SystemCard" title="System C">
                                Link
                            </Card>
                        </Col>
                    </Row>                   
                </Card>
            </div>
        );
    }
}

export default HomePage;