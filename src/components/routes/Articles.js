import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from '../ArticleList';
import Article from '../Article';
import {Route} from 'react-router-dom';

class Articles extends Component {
    render() {
        return (
            <div>
                <ArticleList/>
                <Route path="/articles" render={this.getIndex} exact/>
                <Route path="/articles/:id" render={this.getArticle}/>
            </div>
        );
    }

    getArticle = ({match}) => {
        const {id} = match.params;
        return <Article id={id} isOpen key={id}/>
    };

    getIndex = ({match}) => {
        if (!match) return <h2>Article page</h2>;
        return <h2>Please select article</h2>;
    }
}

Article.propTypes = {};

export default Articles;
