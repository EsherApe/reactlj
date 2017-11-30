import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';
import CommentForm from './commentForm';
import {loadArticleComments} from '../AC';
import {connect} from 'react-redux';
import Loader from "./Loader";

class CommentList extends Component {

    componentWillReceiveProps({isOpen, article, loadArticleComments}) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id);
        }
    }

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

function getBody({article: {comments = [], id, commentsLoaded, commentsLoading}, isOpen}) {
    if (!isOpen) return null;
    if (!commentsLoading) return <Loader/>;
    if(!commentsLoaded) return null;

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

export default connect(null, {loadArticleComments})(toggleOpen(CommentList));