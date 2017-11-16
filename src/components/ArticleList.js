import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import toggleAccordion from '../decorators/toggleAccordion';
import {connect} from 'react-redux';
import {filtrateArticlesSelector} from "../selectors/index";

class ArticleList extends React.Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        openId: PropTypes.string,
        toggleAccordion: PropTypes.func.isRequired
    };

    render() {
        const {articles, openId, toggleAccordion} = this.props;
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openId}
                    toggleAccordion = {toggleAccordion(article.id)}
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
        articles: filtrateArticlesSelector(state)
    }
})(toggleAccordion(ArticleList))
