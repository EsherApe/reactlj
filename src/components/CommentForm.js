import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../decorators/validateComment';

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
                        <div><label htmlFor="">Enter your name</label></div>
                        <input type="text" className="form-control" name="" id="" placeholder="" value={this.state.user}/>
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

CommentForm.defaultProps = {};

export default CommentForm;
