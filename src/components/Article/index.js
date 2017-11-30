import React, {Component} from 'react';
import {connect} from 'react-redux';
import CommentList from '../CommentList';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';
import {deleteArticle, loadArticle} from "../../AC";
import Loader from '../Loader'
import './article.css';

class Article extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        //from connect
        article: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string
        })
    };

    state = {
        updateIndex: 0,
        areCommentsOpen: false
    };

    componentDidMount() {
        const {loadArticle, article, id} = this.props;
        if(!article || (!article.text && !article.loading)) loadArticle(id);
    }

    render() {
        const {article, isOpen, toggleAccordion} = this.props;
        if (!article) return null;

        return (
            <div>
                <h1>{article.title}</h1>
                <button onClick={toggleAccordion}>
                    {isOpen ? 'close' : 'open'} article
                </button>
                <button onClick={this.handleDelete}>delete me</button>
                <CSSTransitionGroup
                    transitionName='article'
                    transitionAppear
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                    transitionAppearTimeout={300}
                    component='div'>
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        )
    }

    handleDelete = () => {
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id);
    };

    getBody() {
        const {article, isOpen} = this.props;
        if(!isOpen) return null;
        if(article.loading) return <Loader/>;

        return (
            <section>
                {article.text}
                <CommentList article={article} ref = {this.setCommentsRef} key = {this.state.updateIndex}/>
            </section>
        )
    }

    setCommentsRef = ref => {

    }
}

export default connect((state, ownProps) => ({
    article: state.articles.entities.get(ownProps.id)
}), {deleteArticle, loadArticle})(Article);