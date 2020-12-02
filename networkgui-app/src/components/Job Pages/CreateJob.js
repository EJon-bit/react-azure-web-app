import React from 'react';
import 'antd/dist/antd.css';
import '../../cssComponents/CreateJob.css'

import { Card, Form, Row, Col, Input, Select, Button, DatePicker } from 'antd';
const { Option } = Select;
const axios = require('axios');

class CreateRequest extends React.Component{
    state={
        formInputs:null,
        validate:{
            jobValidate:"warning",
            reqTitleVal:"warning",
            reqSourceVal:"warning",
            reqTypeVal:"warning",
        }
    }

    submitForm=()=>{
        axios.post('/api/item/postReq/1', this.state.formInputs)
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    modifyFieldVal=(modifiedVal, arr, status)=>{
        for(let element of arr){
            if(modifiedVal===element){
                var regXs=[/job/,/reqTi/,/reqTy/,/reqS/];
            
                regXs.forEach((x, index)=>{
                    var testItem= x.test(element)
                    console.log(testItem)
                    if(testItem===true){
                        if(index===0){
                            this.setState({validate: {jobValidate:status}})
                        }
                        else if(index===1){
                            this.setState({validate: {reqTitleVal:status}})
                        }
                        else if(index===2){
                            this.setState({validate: {reqTypeVal:status}})
                        }
                        else if(index===3){
                            this.setState({validate: {reqSourceVal:status}})
                        }

                    }
                })
                
            }
        }
    }

    validateValChange=(changedValues, allValues)=>{
        console.log(changedValues);
        console.log(allValues); 
        var inputArr=[];
        var valChange= Object.values(changedValues)      
        
        for (const [key, value] of Object.entries(allValues)) {
            inputArr.push(`${key}: ${value}`);
        }
        for (const [key, value] of Object.entries(changedValues)) {
            changedValues=`${key}: ${value}`;
        }        

        if (valChange[0]===""){
            this.modifyFieldVal(changedValues, inputArr, "warning");
        }
       
        else{
            this.modifyFieldVal(changedValues, inputArr, "success");
        } 
        
        this.setState({formInputs: allValues});
        
    }


    render(){
        return(
            <div>
                <Card title="Job Request Form">
                    <Form layout="vertical" requiredMark={'hidden'} onValuesChange={this.validateValChange}>                    
                        <Row gutter={[200,35]}>
                            <Col span={12}>                        
                                <Form.Item 
                                    name='job' 
                                    label='Job Name'
                                    hasFeedback
                                    validateStatus={this.state.validate.jobValidate}>
                                    <Input placeholder="placeholder"/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item 
                                    name='sumbissionDate'
                                    label={'Submission Date'}>                                   
                                    <DatePicker id="datepicker" showTime />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item 
                                    name='scheduleDate'
                                    label='Scheduled Date'>                                    
                                    <DatePicker id="datepicker" showTime />                                    
                                </Form.Item>
                            </Col>
                            <Col span={12}>    
                                <Form.Item 
                                    name='reqTitle'
                                    label='Request Title'
                                    hasFeedback
                                    validateStatus={this.state.validate.reqTitleVal}
                                    // 
                                    >
                                    <Input placeholder="placeholder"/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>    
                                <Form.Item 
                                name="reqSource"
                                label="Request Source"
                                hasFeedback
                                validateStatus={this.state.validate.reqSourceVal}>
                                <Input placeholder="placeholder"/>
                            </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="reqType"
                                    label="Request Type"
                                    validateStatus={this.state.validate.reqTypeVal}
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
                                <Button type="primary" htmlType="submit" onSubmit={this.submitForm}>
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