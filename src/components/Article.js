import React from 'react';
import CommentList from './CommentList';
import PropTypes from 'prop-types';
import  toggleOpen from '../decorators/toggleOpen';

class Article extends React.Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    };

    render() {
        const {article, isOpen, toggleOpen} = this.props;

        return (
            <div>
                <h1>{article.title}</h1>
                <button onClick={toggleOpen}>
                    {isOpen ? 'close article' : 'open article'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {article, isOpen} = this.props;
        if(!isOpen) return null;

        return (
            <section>
                {article.text}
                <CommentList comments={article.comments}/>
            </section>
        )
    }
}

export default toggleOpen(Article);