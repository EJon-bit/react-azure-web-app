import React from 'react';
import 'antd/dist/antd.css';
import{Card, Row, Col} from 'antd';


class PopularLinks extends React.Component{
    render(){
        return(
            <div>
                <Card title="Frequently Visited Network Apps">
                    <Row gutter={30}>
                        <Col flex={5}> 
                            <Card title="App Name">
                                Value
                            </Card>
                        </Col>

                        <Col flex={5}> 
                            <Card title="App Name">
                                Value
                            </Card>
                        </Col>

                        <Col flex={5}> 
                            <Card title="App Name">
                                Value
                            </Card>
                        </Col>
                    </Row>                   
                </Card>
            </div>
        );
    }
}

export default PopularLinks;