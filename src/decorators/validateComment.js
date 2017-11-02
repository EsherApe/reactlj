import React, {Component} from 'react';

export default OriginComponent => class validateComment extends Component {
    state = {

    };

    render() {
        return <OriginComponent {...this.state} {...this.props}/>
    }
}
