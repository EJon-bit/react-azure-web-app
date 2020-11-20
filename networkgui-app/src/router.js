import React from 'react';
import HomePage from './components/HomePage';
import Notifications from './components/Notifications';
import PopularLinks from './components/PopularLinks'
import Configurations from './components/Configurations';
import CreateJob from './components/CreateJob';
import Operation1 from './components/Operation Pages/Operation1'
import NetworkPage from './components/NetworkPage';

import {Switch, Route} from 'react-router-dom';


class Routes extends React.Component{
    render(){
        return(            
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/notices" component={Notifications}/>
                <Route path="/config" component={Configurations}/>
                <Route path="/createJob" component={CreateJob}/>
                <Route path="/operation1" component={Operation1}/>  
                <Route path="/network" component={NetworkPage}/>
                <Route path="/PopLinks" component={PopularLinks}/>   
            </Switch>                                        
            
        );
    }
}

export default Routes;