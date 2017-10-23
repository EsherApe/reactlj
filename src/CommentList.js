import React from 'react';
import Comment from './Comment';

/**
 * @return {null}
 */
export default function CommentList({comments}) {
    if(!comments) return null;
    const commentsList = comments.map(comment => {
        return <li key={comment.id}><Comment comment={comment}/></li>
    });
    return (
        <ul>
            {commentsList}
        </ul>
    )
}