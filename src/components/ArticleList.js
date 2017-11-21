import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import toggleAccordion from '../decorators/toggleAccordion';
import {connect} from 'react-redux';
import {filtrateArticlesSelector} from "../selectors/index";
import {loadAllArticles} from '../AC';
import Loader from './Loader';

class ArticleList extends React.Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        openId: PropTypes.string,
        toggleAccordion: PropTypes.func.isRequired
    };

    componentDidMount() {
        const {loaded, loading, loadAllArticles} = this.props;
        if (!loaded || !loading)loadAllArticles();
    }

    render() {
        const {articles, openId, toggleAccordion, loading} = this.props;
        if(loading) return <Loader/>;
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
        articles: filtrateArticlesSelector(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded
    }
}, {loadAllArticles})(toggleAccordion(ArticleList))
