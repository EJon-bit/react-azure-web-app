import React from 'react';
import 'antd/dist/antd.css';
import '../cssComponents/Notifications.css'
import {Alert, Card, Row, Col} from 'antd';

class Notifications extends React.Component{
    render(){
        return(
            <div>
                <Card title="SNMP Alerts">
                    <Row>
                        <Col flex={5}>                        
                            <Alert
                                message="Informational Notes"
                                description="Additional description and information about copywriting."
                                type="info"
                                showIcon/>
                            <Alert
                                message="Warning"
                                description="This is a warning notice about copywriting."
                                type="warning"
                                showIcon
                                closable/>
                            <Alert
                                message="Error"
                                description="This is an error message about copywriting."
                                type="error"
                                showIcon/>                     
                        </Col>
                    </Row>    
                </Card>

                <Card title="General Notifications">                  
                    <Row gutter={[24,24]}>
                        <Col flex={5}>                        
                        <Alert
                                message="Informational Notes"
                                description="Additional description and information about copywriting."
                                type="info"
                                showIcon/>
                            <Alert
                                message="Warning"
                                description="This is a warning notice about copywriting."
                                type="warning"
                                showIcon
                                closable/>
                            <Alert
                                message="Error"
                                description="This is an error message about copywriting."
                                type="error"
                                showIcon/>                             
                        </Col>
                    </Row>   
                </Card>
            </div>
        );
    }
}

export default Notifications;