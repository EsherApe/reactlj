import React from 'react';
import PropTypes from 'prop-types';

export default class Comment extends React.Component {
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

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
};