import React from 'react';
import 'antd/dist/antd.css';
import { Card, Form, Row, Col, Input, Select, Button } from 'antd';
const { Option } = Select;

class CreateRequest extends React.Component{
    render(){
        return(
            <div>
                <Card>
                    <Form layout="vertical" requiredMark={'hidden'}>                    
                        <Row gutter={[24,35]}>
                            <Col span={12}>                        
                                <Form.Item 
                                    name={'job'} 
                                    label={'Job Name'} 
                                    rules={[
                                        {
                                            required: true,
                                            message: 'This field is required!',
                                        },
                                    ]}>
                                    <Input placeholder="placeholder" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item 
                                    name={'sumbissionDate'} 
                                    label={'Submission Date'}>                                   
                                    <Input placeholder="placeholder" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item 
                                    name={'scheduleDate'} 
                                    label={'Scheduled Date'}>
                                    
                                    <Input placeholder="placeholder" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>    
                                <Form.Item 
                                    name={'reqTitle'} 
                                    label={'Request Title'} 
                                    rules={[
                                        {
                                            required: true,
                                            message: 'This field is required!',
                                        },
                                    ]}>
                                    <Input placeholder="placeholder"/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>    
                                <Form.Item 
                                name={'reqSource'} 
                                label={'Request Source'} 
                                rules={[
                                    {
                                        required: true,
                                        message: 'This field is required!',
                                    },
                                ]}>
                                <Input placeholder="placeholder"/>
                            </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="reqType"
                                    label="Request Type"
                                    rules={[
                                        {
                                            required: true,
                                            message:'Must choose a Request Type'
                                        },
                                    ]}>
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
                                    rules={[
                                        {
                                            required: true,
                                            message:'Must choose a File to Attach'
                                        },
                                    ]} >
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
                                    rules={[
                                        {
                                            required: true,
                                            message:'Must choose a File to Attach'
                                        },
                                    ]} >
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