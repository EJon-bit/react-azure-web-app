import React from 'react';
import 'antd/dist/antd.css';
import {Card, Col, Row} from 'antd';
import '../cssComponents/CurrentJobs.scoped.css'

class CurrentJobs extends React.Component{
    render(){
        return(
            <div>
                <Card>
                    <Row gutter={[24,10]}>
                        <Col span={24}> 
                            <Card id="JobCard" title="Job 1">
                                Value
                            </Card>
                        </Col>

                        <Col span={24}> 
                            <Card id="JobCard" title="Job 2">
                                Value
                            </Card>
                        </Col>

                        <Col span={24}> 
                            <Card id="JobCard" title="Job 3">
                                Value
                            </Card>
                        </Col>
                    </Row>                   
                </Card>
            </div>
            
        );
    }
}

export default CurrentJobs;