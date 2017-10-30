import React from 'react';
import Article from './Article';

export default class ArticleList extends React.Component {
    state = {
        openArticleId: null
    };

    render() {
        const articleElements = this.props.articles.map(article =>
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === this.state.openArticleId}
                    toggleOpen = {this.toggleOpenArticle(article.id)}
                />
            </li>
        );

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    toggleOpenArticle = openArticleId => ev => {
        this.setState({openArticleId})
    }
}
