import React from 'react';
import 'antd/dist/antd.css';
import {Card, Row, Col} from 'antd';
import '../cssComponents/PopLinks.scoped.css';


class PopularLinks extends React.Component{
    render(){
        return(
            <div>
                <Card title="Frequently Visited Network Apps">
                    <Row gutter={30}>
                        <Col flex={5}> 
                            <Card id="AppCard" title="App Name">
                                Link
                            </Card>
                        </Col>

                        <Col flex={5}> 
                            <Card id="AppCard" title="App Name">
                                Link
                            </Card>
                        </Col>

                        <Col flex={5}> 
                            <Card id="AppCard" title="App Name">
                                Link
                            </Card>
                        </Col>
                    </Row>                   
                </Card>
            </div>
        );
    }
}

export default PopularLinks;