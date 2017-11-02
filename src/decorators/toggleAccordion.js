import React from 'react';

export default (OriginComponent) => class Accordion extends React.Component {
    state = {
        openId: null
    };

    render() {
        return <OriginComponent {...this.props} {...this.state} toggleAccordion = {this.toggleAccordion}/>
    };

    toggleAccordion = openId => () => {
        this.setState({
            openId: openId === this.state.openId ? null : openId
        });
    };

}