import React from 'react';
import './App.css';
import Routes from './router';
import SiderNav from './components/NavSider';
import { BrowserRouter as Router } from 'react-router-dom';
import {Layout} from 'antd';

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Layout style={{ minHeight: '100vh' }}>
            <SiderNav/>
            <Layout className="site-layout">
              <Routes/>
            </Layout>
            
          </Layout>
        </div>
        
      </Router>
      
    );
  }
  
}

export default App;
