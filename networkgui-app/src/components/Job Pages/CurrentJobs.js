import React from 'react';
import 'antd/dist/antd.css';
import {Card, Col, Row} from 'antd';
import '../../cssComponents/CurrentJobs.scoped.css'
import { Steps } from 'antd';
const { Step } = Steps;

class CurrentJobs extends React.Component{
    state={
        jobs:[
            {
                name:"Job 1",
                description:"ifjvin nyugy",
                steps:[
                    {
                        name:"MINSAT",
                        description:"Parsing X, producing Y",
                        percent:null,
                        current:null,
                    },
                    {
                        name:"SDP",
                        description:"Parsing X, producing Y",
                        percent:null,
                        current:null,
                    },
                    {
                        name:"EMA",
                        description:"Parsing X, producing Y",
                        percent:null,
                        current:null,
                    }
                ]
            }
        ]
    }
    render(){

        var displaySteps= this.state.jobs[0].steps.map((step, index)=>{
            return(
                <Step title={step.name} description={step.description} />
            )
        })
        var displayJobs= this.state.jobs.map((job, index)=>{
            return(
                <Col key={`jobCol-${index}`} span={24}> 
                    <Card 
                        id="JobCard" 
                        title={job.name}
                        actions={[
                            <Steps current={2} percent={60}>
                               {displaySteps}
                            </Steps>]}>
                        <p>{job.description}</p>
                        
                    </Card>
                </Col>
            );
        });

        
        return(
            <div>
                <Card>
                    <Row gutter={[24,10]}>
                        {displayJobs}
                    </Row>                   
                </Card>
            </div>
            
        );
    }
}

export default CurrentJobs;