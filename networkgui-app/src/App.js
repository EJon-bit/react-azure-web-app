import React from 'react';
import './App.css';
import Routes from './router';
import SiderNav from './components/NavSider';
import { BrowserRouter as Router } from 'react-router-dom';
import {Layout} from 'antd';

const {Header}= Layout;

class App extends React.Component {

  state = {    
    operations:["Operation 1", "Operation 2", "Operation 3"]
  };
  
  render(){
    return (
      <Router>
        <div className="App">
          <Layout id='appContainer'>            
            <SiderNav transOps={this.state.operations}/>
            <Layout className="site-layout">
              <Header>
                
              </Header>
              <div id='routesContainer'>
                <Routes transOps={this.state.operations}/>
              </div>                 
            </Layout>            
          </Layout>
        </div>
        
      </Router>
      
    );
  }
  
}

export default App;
