import React, {Component} from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';
import CommentForm from './commentForm';
import PropTypes from 'prop-types';

class CommentList extends Component {

    render () {
        const {article, isOpen, toggleOpen} = this.props;
        const text = isOpen ? 'hide' : 'show';
        return (
            <div>
                <button onClick={toggleOpen}>{text} comments</button>
                {getBody({article, isOpen})}
            </div>
        )
    }
}

CommentList.propTypes = {
    comments: PropTypes.array,
    //from toggle open decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
};

function getBody({article: {comments = [], id}, isOpen}) {
    if (!isOpen) return null;
    if (!comments.length) return (
        <div>
            <p>No comments yet!</p>
            <CommentForm articleId = {id}/>
        </div>
    );

    return (
        <div>
            <ul>
                {comments.map(id => <li key={id}><Comment id={id}/></li>)}
            </ul>
            <CommentForm articleId = {id}/>
        </div>
    )
}

export default toggleOpen(CommentList);