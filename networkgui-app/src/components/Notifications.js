import React from 'react';
import 'antd/dist/antd.css';
import '../cssComponents/Notifications.scoped.css'
import {Alert, Card, Row, Col, Popconfirm, Button} from 'antd';

class Notifications extends React.Component{
    
    state={
        visible:false,      
        confirmLoading:false,
        snmpAlerts:[
            {
                alertType:"error",
                source:"AIR",
                message:"This Device is experiencing issues",
            },
            {
                alertType:"success",
                source:"HLR",
                message:"This alert was successfully formed",
            }
        ],
        generalNotices:[
            {                
                alertType:"info",
                source: "Database Add", 
                message:"Something was jus changed",
            },
            {
                alertType:"info",
                source: "Database Delete",
                message:"Something was deleted",
            }
        
        ]        
    }       

    showPopconfirm = visible => {
        this.setState({visible});
    };

    handleOk = confirmLoading => {
        this.setState({confirmLoading});
        setTimeout(() => {
            this.setState({visible:false});
            this.setState({confirmLoading:false});
        }, 2000);
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({visible:false});
    };

    render(){

        var snmpAlertDisplay= this.state.snmpAlerts.map((alert, index) =>{
            return(
                <Alert
                    key={`Alert-${index}`}
                    message={alert.source}
                    description={alert.message}
                    type={alert.alertType}
                    showIcon/>
            );
        });

        var noticeDisplay= this.state.generalNotices.map((notice, index) =>{
            return(
                <Alert
                    key={`Notice-${index}`}
                    message={notice.source}
                    description={notice.message}
                    type={notice.alertType}
                    showIcon/>
            );
        });
        
        return(
            <div>
                <Card title="SNMP Alerts">
                    <Row>
                        <Col flex={5}>                        
                            {snmpAlertDisplay}                   
                        </Col>
                    </Row>    
                    <Row id="buttonRow">
                        <Popconfirm id="popConfirm"
                            title="Are you Sure?"
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
                            {noticeDisplay}                          
                        </Col>
                    </Row>   
                </Card>
            </div>
        );
    }
}

export default Notifications;