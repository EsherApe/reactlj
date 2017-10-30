import React from 'react';

export default (OriginComponent) => class WrappedComponent extends React.Component {
    state = {
        openId: null
    };

    render() {
        return <OriginComponent {...this.props} {...this.state} toggleAccordion = {this.toggleAccordion}/>
    };

    toggleAccordion = openId => ev => {
        this.setState({openId});
    };

    componentWillUpdate(nextProps, nextState, nextContext) {
        if(this.state.openId === nextState.openId) {
            this.setState({openId: null});
        }
    };

}