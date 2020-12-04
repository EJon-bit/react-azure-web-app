import { Card, Col, Row } from 'antd';
//import {EllipsisOutlined} from '@ant-design/icons'
import React from 'react';
import '../../node_modules/antd/dist/antd.css';
import '../cssComponents/Home.scoped.css'
//import Operation from 'antd/lib/transfer/operation';


class HomePage extends React.Component{

    state={
        systems:[
            {
                name:"EMA",
                operations:["Sub Disconnects","Sub Loading","Sub Management"],
                description:"luhluihi",
                currentJobCount:3,
            },
            {
                name:"MINSAT",
                operations:["Sub Disconnects","Sub Loading","Sub Management"],
                description:"iuoyyurdyt",
                currentJobCount:4,
            },
            {
                name:"AF",
                operations:["Sub Disconnects","Sub Loading","Sub Management"],
                description:"yurdk",
                currentJobCount:4,
            },
            {
                name:"AUC",
                operations:["Sub Disconnects","Sub Loading","Sub Management"],
                description:"yufdl",
                currentJobCount:4,
            }
        ]
    }

    

    render(){
        var displaySys=this.state.systems.map(system=>{
            return(
                <Col key={`System ${system}`} span={8}> 
                    <Card  id="SystemCard" title={system.name} 
                        actions={[
                            <p>{system.currentJobCount}</p>,                                      
                            <p>{system.description}</p>                                                                  
                        ]}>
                        {system.operations.map(op => 
                            (
                                <Col key={`${op}`} flex={5}>
                                    <Card id="opCard">
                                        {op}
                                    </Card>                            
                                </Col>  
                            )
                        )};                                          
                    </Card>
                </Col>
            )
        })
        return(
            <div>
                <Card title="Network Nodes">
                    <Row gutter={30}>
                        {displaySys}                        
                    </Row>                   
                </Card>
            </div>
        );
    }
}

export default HomePage;