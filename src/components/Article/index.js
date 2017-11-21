import React, {Component, PureComponent} from 'react';
import {connect} from 'react-redux';
import CommentList from '../CommentList';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';
import {deleteArticle, loadArticle} from "../../AC";
import Loader from '../Loader'
import './article.css';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool.isRequired,
        toggleAccordion: PropTypes.func.isRequired
    };

    state = {
        updateIndex: 0,
        areCommentsOpen: false
    };

    componentWillReceiveProps({isOpen, loadArticle, article}) {
        if(isOpen && !article.text && !article.loading) loadArticle(article.id);
    }

    //PureComponent это тот же Component только со встроенным shouldComponentUpdate который сравнивает все новые и старые пропсы
    //можно не писать shouldComponentUpdate если компонент унаследован от PureComponent
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return nextProps !== this.props.isOpen
    // }

    render() {
        const {article, isOpen, toggleAccordion} = this.props;

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

export default connect(null, {deleteArticle, loadArticle})(Article);