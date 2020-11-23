import React from 'react';
import 'antd/dist/antd.css';
import '../../cssComponents/CreateJob.css'
import { Card, Form, Row, Col, Input, Select, Button, DatePicker } from 'antd';
const { Option } = Select;

class CreateRequest extends React.Component{
    render(){
        return(
            <div>
                <Card title="Job Request Form">
                    <Form layout="vertical" requiredMark={'hidden'}>                    
                        <Row gutter={[200,35]}>
                            <Col span={12}>                        
                                <Form.Item 
                                    name={'job'} 
                                    label={'Job Name'} 
                                    hasFeedback
                                    validateStatus="warning"
                                    // 
                                    >
                                    <Input placeholder="placeholder" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item 
                                    name={'sumbissionDate'} 
                                    label={'Submission Date'}>                                   
                                    <DatePicker showTime />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item 
                                    name={'scheduleDate'} 
                                    label={'Scheduled Date'}>                                    
                                    <DatePicker showTime />                                    
                                </Form.Item>
                            </Col>
                            <Col span={12}>    
                                <Form.Item 
                                    name={'reqTitle'} 
                                    label={'Request Title'} 
                                    validateStatus="warning"
                                    // 
                                    >
                                    <Input placeholder="placeholder"/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>    
                                <Form.Item 
                                name={'reqSource'} 
                                label={'Request Source'} 
                                // 
                                validateStatus="warning"
                                >
                                <Input placeholder="placeholder"/>
                            </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="reqType"
                                    label="Request Type"
                                    validateStatus="warning"
                                    // 
                                    >
                                    <Select placeholder="Select the type of request" allowClear>
                                        <Option value="male">male</Option>
                                        <Option value="female">female</Option>
                                        <Option value="other">other</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="reqProps"
                                    label="Request Properties"
                                    validateStatus="warning"
                                    // rules={[
                                    //     {
                                    //         required: true,
                                    //         message:'Must choose a File to Attach'
                                    //     },
                                    // ]}
                                    >
                                    <Select placeholder="Select Additional Properties" allowClear>
                                        <Option value="male">male</Option>
                                        <Option value="female">female</Option>
                                        <Option value="other">other</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="attachments"
                                    label="File Attachments"
                                    validateStatus="warning"
                                    // 
                                    >
                                    <Select placeholder="Select a File" allowClear>
                                        <Option value="male">male</Option>
                                        <Option value="female">female</Option>
                                        <Option value="other">other</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} style={{textAlign: 'right'}}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>                                                  
                            </Col>
                        </Row>
                    </Form>
                </Card>                
            </div>
        );
    }
}

export default CreateRequest;