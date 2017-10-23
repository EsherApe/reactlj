import React from 'react';

export default class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
    }

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;

        return (
            <div>
                <h1>{article.title}</h1>
                <button onClick={this.toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if(!this.state.isOpen) return null;
        const {article} = this.props;
        return <section>{article.text}</section>
    }

    toggleOpen = () => {
        this.setState({isOpen: !this.state.isOpen});
    }
}