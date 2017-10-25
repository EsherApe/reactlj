import React from 'react';

export default (OriginComponent) => class WrappedComponent extends React.Component {
    render() {
        return <OriginComponent {...this.props}/>
    }
}