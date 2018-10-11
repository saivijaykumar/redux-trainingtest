import React, { Component } from 'react';
import {bindActionCreator} from 'redux';
class CommentBox extends Component {
    constructor(props){
        super(props)
        this.state={
            comment:""
        }
    }
    handleChange=(e)=>{
        this.setState({comment:e.target.value});
    }
    saveComment=()=>{
        this.props.saveComment(this.state.comment);
        this.setState({comment:""});
    }
    render() {
        return (
            <div>
                <input type="text" onChange={()=>this.props.handleChange().bind(this)}></input>
                <button onClick={this.saveComment()}>saveComment</button>
            </div>
        );
    }
}

matchDispatchToProps=(dispatch)=>{
 return {saveComment:""}
}
export default CommentBox;