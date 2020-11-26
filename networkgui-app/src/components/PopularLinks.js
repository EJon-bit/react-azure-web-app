import React from 'react';
import 'antd/dist/antd.css';
import {Card, Row, Col} from 'antd';
import '../cssComponents/PopLinks.scoped.css';


class PopularLinks extends React.Component{
    state={
        popLinks:[
            {
                name: "App Name",
                link:"stdgsadf"
            }
        ]
    }
   
    render(){
        var displayLinks= this.state.popLinks.map((link, index)=>{
            return(
                <Col key={`link-${index}`} flex={5}> 
                    <Card id="AppCard" title={link.name}>
                        {link.link}
                    </Card>
                </Col>
            )
        })


        return(
            <div>
                <Card title="Frequently Visited Network Apps">
                    <Row gutter={30}>                        
                        {displayLinks}
                    </Row>                   
                </Card>
            </div>
        );
    }
}

export default PopularLinks;