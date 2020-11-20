import React from 'react';
import '../../node_modules/antd/dist/antd.css';
import '../cssComponents/NetworkPage.css'
import { Tabs } from 'antd';
const { TabPane } = Tabs;

class NetworkPage extends React.Component{
    render(){
        return(
            <div className="card-container">
                <Tabs tabPosition="bottom" type="card">
                    <TabPane tab="Tab Title 1" key="1">
                    
                    </TabPane>
                    <TabPane tab="Tab Title 2" key="2">
                    
                    </TabPane>
                    <TabPane tab="Tab Title 3" key="3">
                    
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default NetworkPage;