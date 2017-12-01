import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';

class Comments extends Component {
    static propTypes = {

    };

    render() {

        return (
            <div>
                <Route path="/comments" render={this.getIndex} exact/>
                <Route path="/comments/:page" render={this.getPage}/>
            </div>
        );
    }

    getIndex = () => {
        return <h1>comments</h1>;
    };

    getPage = () => {

    }

}

export default Comments;


