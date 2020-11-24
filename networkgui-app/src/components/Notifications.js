import React from 'react';
import 'antd/dist/antd.css';
import '../cssComponents/Notifications.scoped.css'
import {Alert, Card, Row, Col, Popconfirm, Button} from 'antd';

class Notifications extends React.Component{

    state={
        visible:false,
        setVisible:false,
        confirmLoading:false,
        setConfirmLoading:false
    }     

    showPopconfirm = () => {
        this.setState({setVisible:true});
    };

    handleOk = () => {
        this.setState({setConfirmLoading:true});
        setTimeout(() => {
            this.setState({setVisible:false});
            this.setState({setConfirmLoading:false});
        }, 2000);
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({setVisible:false});
    };

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
                    <Row id="buttonRow">
                        <Popconfirm
                            title="Title"
                            placement="left"
                            visible={this.state.visible}
                            onConfirm={this.handleOk}
                            okButtonProps={{ loading: this.state.confirmLoading }}
                            onCancel={this.handleCancel}>
                        </Popconfirm>
                        <Button type="primary" onClick={this.showPopconfirm}>
                            Clear Alerts
                        </Button>
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