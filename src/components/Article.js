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

    componentWillReceiveProps(nextProps) {
        console.log('------', 'updating', this.props.isOpen, nextProps.isOpen);
    }

    componentWillMount() {
        console.log('-----', 'mounting');
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;

        return (
            <div ref={this.setContainerRef}>
                <h1>{article.title}</h1>
                <button onClick={toggleOpen}>
                    {isOpen ? 'close' : 'open'} article
                </button>
                {this.getBody()}
            </div>
        )
    }

    setContainerRef = ref => {
        this.container = ref;
    };

    componentDidMount() {
        console.log('-----', 'mounted');
    }

    getBody() {
        const {article, isOpen} = this.props;
        if(!isOpen) return null;

        return (
            <section>
                {article.text}
                <CommentList comments={article.comments} ref={this.setCommentRef()}/>
            </section>
        )
    }

    setCommentRef = ref => {
        console.log(ref);
    };
}

export default Article;