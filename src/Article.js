import React from 'react';
import CommentList from './CommentList';

export default class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showArticle: true,
            showComments: true,
            showCommentsButton: null
        }
    }

    render() {
        const {article} = this.props;
        const {showArticle} = this.state;

        return (
            <div>
                <h1>{article.title}</h1>
                <button onClick={this.toggleOpenArticle}>
                    {showArticle ? 'close article' : 'open article'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if(!this.state.showArticle) return null;
        const {article} = this.props;

        return (
            <section>
                {article.text}
                {this.showCommentButton()}
                {this.getComments()}
            </section>
        )
    }

    showCommentButton() {
        const {article} = this.props;
        if(!article.comments) return null;
        const {showComments} = this.state;
        return (
            <div>
                <button onClick={this.toggleOpenComments}>
                    {showComments ? 'hide comments' : 'show comments'}
                </button>
            </div>
        )
    }

    getComments() {
        if(!this.state.showComments) return null;
        const {article} = this.props;
        return <CommentList comments={article.comments}/>
    }

    toggleOpenArticle = () => {
        this.setState({showArticle: !this.state.showArticle});
    };

    toggleOpenComments = () => {
        this.setState({showComments: !this.state.showComments});
    }
}