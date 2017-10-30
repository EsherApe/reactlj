import React from 'react';
import CommentList from './CommentList';
import PropTypes from 'prop-types';

class Article extends React.Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool.isRequired,
        toggleAccordion: PropTypes.func.isRequired
    };

    render() {
        const {article, isOpen, toggleAccordion} = this.props;

        return (
            <div>
                <h1>{article.title}</h1>
                <button onClick={toggleAccordion}>
                    {isOpen ? 'close' : 'open'} article
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

export default Article;