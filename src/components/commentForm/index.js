import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ValidateInput from '../validateInput';

class CommentForm extends Component {
    static propTypes = {};

    state = {
        user: '',
        text: ''
    };

    render() {
        return (
            <div>
                <form action="" method="post" role="form">
                    <legend><h4>Add comment</h4></legend>
                    <div className="">
                        <div><label>Enter your name</label></div>
                        <input type="text"
                               value={this.state.user}
                               onChange={this.handleChange('user')}
                               className={this.getClassName('user')}/>
                    </div>
                    <div className="">
                        <div><label>Write your comment</label></div>
                        <textarea cols="30" rows="10"
                                  value={this.state.text}
                                  onChange={this.handleChange('text')}
                                  className={this.getClassName('text')}>
                        </textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.setState({
            user: '',
            text: ''
        })
    };

    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min
        ? 'form-input__error' : '';

    handleChange = type => ev => {
        const {value} = ev.target;
        if(value.length > limits[type].max) return;
        this.setState({
            [type]: value
        })
    }
}

const limits = {
    user: {
        min: 5,
        max: 15
    },
    text: {
        min: 20,
        max: 35
    }
};

export default CommentForm
