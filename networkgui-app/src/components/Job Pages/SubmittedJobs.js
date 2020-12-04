import React from 'react';
import 'antd/dist/antd.css';
import {Card, Col, Row} from 'antd';
import '../../cssComponents/SubmittedJobs.css'

class SubmittedJobs extends React.Component{
    state={
        jobs:[
            {
                name:"Job 1",               
                startTime:null,
                endTime:null,
                logs:[
                    {
                        source:null,
                        fileName:null,
                    }
                ]
            }
        ]
    }
    render(){
        var displayJobs= this.state.jobs.map((job, index)=>{
            return(
                <Col key={`jobCol-${index}`} span={24}> 
                    <Card 
                        id="subJobCard" 
                        title={job.name}
                        actions={[
                            <p>Open Log</p>,                                      
                                                                                          
                        ]}>
                        <p>{job.startTime}</p>
                        <p>{job.endTime}</p>
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

export default SubmittedJobs