import React from 'react';
import Article from './Article';
import toggleAccordion from '../decorators/toggleAccordion';

class ArticleList extends React.Component {
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

export default toggleAccordion(ArticleList);
