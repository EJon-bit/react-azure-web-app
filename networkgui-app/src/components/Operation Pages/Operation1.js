import React from 'react';
import 'antd/dist/antd.css';
import Operation from './Sub Op Components/Operation';
import {withRouter} from 'react-router-dom';


class Operation1 extends React.Component{
    state = {         
        path: this.props.location.pathname
    };

    render(){
        return(
            <div>
                <Operation opPath={this.state.path}/>
            </div>
        );
    }
}

export default withRouter(Operation1);