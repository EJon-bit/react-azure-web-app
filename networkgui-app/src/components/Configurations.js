import React from 'react';
import 'antd/dist/antd.css';
import '../cssComponents/Config.css'
import Editor from '@monaco-editor/react';
import { Row, Col, Card, Input, Select} from 'antd';

const { Option } = Select;

class Configurations extends React.Component{
    render(){
        return(
            <div>
                <Row gutter={[24, 50]}>
                    <Col span={24}>
                        <Card title="Operations Configuration">
                            <Input.Group compact>
                                <Select defaultValue="Option1-1">
                                    <Option value="Option1-1">Operation: A</Option>
                                    <Option value="Option1-2">Operation: B</Option>
                                </Select>
                                <Select defaultValue="Option2-2">
                                    <Option value="Option2-1">Config File: A</Option>
                                    <Option value="Option2-2">Config File: B</Option>
                                </Select>
                            </Input.Group>
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