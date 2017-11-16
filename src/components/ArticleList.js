import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import toggleAccordion from '../decorators/toggleAccordion';
import {connect} from 'react-redux';
import {filtrateArticles} from "../selectors/index";

class ArticleList extends React.Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordeon
        openId: PropTypes.string,
        toggleAccordion: PropTypes.func.isRequired
    };

    render() {
        const articleElements = this.props.articles.map(article =>
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === this.props.openId}
                    toggleAccordion = {this.props.toggleAccordion(article.id)}
                />
            </li>
        );

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect(state => {
    return {
        articles: filtrateArticles(state)
    }
})(toggleAccordion(ArticleList))
