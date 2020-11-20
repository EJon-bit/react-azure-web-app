import React from 'react';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import '../../cssComponents/operations.css'
import ActivityTable from './Sub Op Components/ActivityTable'
import {Card} from 'antd';



class Operation1 extends React.Component{
    render(){
        return(
            <div>
                <Card title="Associated Attachments">
                    <Row>
                        <Col flex={5}>                        
                                                    
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

export default Operation1;