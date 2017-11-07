import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ValidateInput from './validateInput';

class CommentForm extends Component {
    static propTypes = {};

    state = {
        user: '',
        text: '',
        valid: true
    };

    validateInput = (e) => {
        let length = e.target.value.length;
        if(length < 5 || length > 15) {
            e.target.style.border = '1px solid red';
        } else {
            e.target.style.border = '1px solid rgb(169, 169, 169)';
        }

        console.log(length);
    };

    onChange = e => {
        this.setState({
            user: e.target.value
        });
        this.validateInput(e);
    };

    render() {
        return (
            <div>
                <form action="" method="post" role="form">
                    <legend><h4>Add comment</h4></legend>
                    <div className="">
                        {/*<ValidateInput label='Enter your name' min={5} max={15} value={this.state.user}/>*/}
                        <div><label htmlFor='input'>Enter your name</label></div>
                        <input type="text" className="form-control" name="" id="" placeholder="" value={this.state.user} onChange={this.onChange}/>
                    </div>
                    <div className="">
                        <div><label htmlFor="">Write your comment</label></div>
                        <textarea name="" id="" cols="30" rows="10" value={this.state.text}> </textarea>
                    </div>

                    <button type="submit" className="">Submit</button>
                </form>
            </div>
        );
    }
}

export default CommentForm;
