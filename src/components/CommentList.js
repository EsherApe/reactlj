import React from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';
import CommentForm from './commentForm'

function CommentList({comments = [], isOpen, toggleOpen}) {
    const text = isOpen ? 'hide' : 'show';

    return (
        <div>
            <button onClick={toggleOpen}>{text} comments</button>
            {getBody({comments, isOpen})}
        </div>
    );

    function getBody({comments, isOpen}) {
        if (!isOpen) return null;
        if (!comments.length) return <p>No comments yet!</p>;

        return (
            <div>
                <ul>
                    {comments.map(id => <li key={id}><Comment id={id}/></li>)}
                </ul>
                <CommentForm/>
            </div>
        )
    }
}

export default toggleOpen(CommentList);