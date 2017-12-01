import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import CommentsPagination from '../CommentsPagination'

function CommentsPage({match}) {
    return <CommentsPagination page={match.params.page}/>
}

CommentsPage.propTypes = {};

export default CommentsPage;