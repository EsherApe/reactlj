import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import ArticleChart from './ArticleChart';
import UserForm from './UserForm';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class App extends Component {
    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        })).isRequired
    };

    state = {
        selection: null
    };

    render() {
        const {articles} = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return (
            <div>
                <UserForm/>
                <Select options={options} value={this.state.selection} onChange={this.changeSelection} multi/>
                <ArticleList articles={articles} defaultOpenId={articles[0].id}/>
                <ArticleChart articles={articles}/>
            </div>
        )
    }

    changeSelection = selection => this.setState({selection})
}

export default App;