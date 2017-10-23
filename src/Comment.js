import React from 'react';

export default class Comment extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {comment} = this.props;
        return (
            <div>
                <small><b>{comment.user}</b></small>
                <div>{comment.text}</div>
            </div>
        )
    }
}