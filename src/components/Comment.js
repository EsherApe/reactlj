import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {commentSelectorFactory} from '../selectors';
import {loadAllComments} from '../AC';

class Comment extends Component{
    static propTypes = {
        id: PropTypes.string.isRequired,
        //from connect
        comment: PropTypes.shape({
            text: PropTypes.string.isRequired,
            user: PropTypes.string.isRequired
        }).isRequired
    };

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

const mapStateToProps = () => {
    const commentSelector = commentSelectorFactory();

    return (state, ownProps) => {
        return {
            comment: commentSelector(state, ownProps)
        }
    }
};

export default connect(mapStateToProps, {loadAllComments})(Comment);