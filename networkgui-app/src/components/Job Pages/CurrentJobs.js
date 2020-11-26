import React from 'react';
import 'antd/dist/antd.css';
import {Card, Col, Row} from 'antd';
import '../../cssComponents/CurrentJobs.scoped.css'

class CurrentJobs extends React.Component{
    state={
        jobs:[
            {
                name:"Job 1",
                description:"ifjvin nyugy",
            }
        ]
    }
    render(){
        var displayJobs= this.state.jobs.map((job, index)=>{
            return(
                <Col key={`jobCol-${index}`} span={24}> 
                    <Card id="JobCard" title={job.name}>
                        {job.description}
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