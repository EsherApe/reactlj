import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default (OriginComponent) => class WrappedComponent extends Component {
    state = {
        isOpen: false
    };

    render() {
        return <OriginComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
    };

    toggleOpen = ev => {
        ev && ev.preventDefault && ev.preventDefault();
        this.setState({isOpen: !this.state.isOpen});
    };
}