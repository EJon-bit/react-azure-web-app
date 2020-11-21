import React from 'react';
import 'antd/dist/antd.css';
 
import Editor from '@monaco-editor/react';
import { Row, Col, Card} from 'antd';

class Configurations extends React.Component{
    render(){
        return(
            <div>
                <Row gutter={[24, 50]}>
                    <Col span={24}>
                        <Card title="Operations Configuration">
                            <Editor height="50vh" language="javascript" value={'var thing = sumn'} theme='dark'/>;
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card title="General Settings">

                        </Card>
                    </Col>
                </Row>
                
            </div>
        );
    }
}

export default Configurations;