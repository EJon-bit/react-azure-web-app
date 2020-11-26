import React from 'react';
import HomePage from './components/HomePage';
import Notifications from './components/Notifications';
import PopularLinks from './components/PopularLinks'
import Configurations from './components/Configurations';
import CreateJob from './components/Job Pages/CreateJob';
import NetworkPage from './components/NetworkPage';
import SubmittedJobs from './components/Job Pages/SubmittedJobs';
import CurrentJobs from './components/Job Pages/CurrentJobs';
import Operation1 from './components/Operation Pages/Operation1'

import {Switch, Route} from 'react-router-dom';


class Routes extends React.Component{
    
       
    render(){

        var opRoutes= this.props.transOps;
        console.log(opRoutes)
        
        opRoutes =opRoutes.map((op)=>{
            return(
                <Route path={`/${op}`} component={Operation1}/>
            );            
        });


        return(            
            <Switch> 
                {opRoutes}               
                <Route exact path="/" component={HomePage}/>
                <Route path="/notices" component={Notifications}/>
                <Route path="/config" component={Configurations}/>
                
                <Route path="/createJob" component={CreateJob}/>                 
                <Route path="/network" component={NetworkPage}/>
                <Route path="/PopLinks" component={PopularLinks}/> 
                <Route path="/jobsSubmitted" component={SubmittedJobs}/>
                <Route path="/currentJobs" component={CurrentJobs}/>
            </Switch>                                        
            
        );
    }
}

export default Routes;