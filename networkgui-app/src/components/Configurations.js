import React from 'react';
import 'antd/dist/antd.css';
import '../cssComponents/Config.css'
import Editor from '@monaco-editor/react';
import { Drawer, Button, Row, Col, Card} from 'antd';

//const { Option } = Select;

class Configurations extends React.Component{

    state={
        visible:false,
        action:null,        
    }

    showAddDrawer = () => {       
        this.setState({action:"add", visible:true})       
       
    };

    showRemDrawer = () => {       
        this.setState({action:"remove", visible:true})       
    };
    
    onClose = () => {
        this.setState({visible:false});
    };


    render(){
        return(
            <div>
                <Drawer
                    width={1200}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}>
                    <Editor height="90vh" language="javascript" value={'var thing = sumn'} theme='dark'/>;
                </Drawer>
                <Row gutter={[24, 50]}>
                    <Col span={24}>                   
                        <Card title="Operations Configuration">
                            <Button id="button" type="primary" onClick={this.showAddDrawer}>
                                Add An Operation
                            </Button> 
                            <Button id="button" type="primary" onClick={this.showAddDrawer}>
                                Edit An Operation
                            </Button> 
                            <Button id="button" type="primary" onClick={this.showRemDrawer}>
                                Remove An Operation
                            </Button>                             
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card title="General Settings">
                            <Button type="primary" onClick={this.showRemDrawer}>
                                Add a Node and State Associated Operations
                            </Button> 
                            <p>Accessibility - Change number of Concurrent Jobs allowed.</p>
                        </Card>
                    </Col>
                </Row>                
            </div>
        );
    }
}

export default Configurations;