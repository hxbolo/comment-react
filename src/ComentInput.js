import React, { Component,PropTypes  } from "react";

class CommentInput extends Component {
  // static propTypes = {
  //   onSubmit: PropTypes.func
  // }

  constructor() {
    super();
    this.state = {
      username: "",
      content: "",
    };
    this.hanldeUesernameChange = this.hanldeUesernameChange.bind(this)
    this.hanldeContentChange = this.hanldeContentChange.bind(this)
    this.hanldeSubmit = this.hanldeSubmit.bind(this)
    this.handleUsernameBlur = this.handleUsernameBlur.bind(this)
  }

  hanldeUesernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }
  hanldeContentChange(e) {
    this.setState({
      content: e.target.value
    });
  }

  hanldeSubmit(){
    if(this.props.onSubmit){
      // const {username, content} = this.state
      // this.props.onSubmit({username,content})

      this.props.onSubmit({
        username:this.state.username,
        content:this.state.content,
        createdTime: +new Date()
        
      })
      
    }
    this.setState({content:''})
  }
  
  handleUsernameBlur(e){
    this._saveUsername(e.target. value)
  }

  
  componentDidMount(){
    this.textarea.focus()
  }
  
  componentWillMount(){
    this._loadUsername()
  }

  

  _saveUsername(username){
    localStorage.setItem('username',username)
  }

  _loadUsername(){
    const username = localStorage.getItem('username')
    if(username){
      this.setState({username})
    }
  }


  render() {
    return (
      <div>
        <div className="comment-input">
          <div className="comment-field">
            <span className="comment-field-name">用户名：</span>
            <div className="comment-field-input">
              <input
                value={this.state.username}
                onChange={this.hanldeUesernameChange}
                onBlur ={this.handleUsernameBlur}
              />
            </div>
          </div>
          <div className="comment-field">
            <span className="comment-field-name">评论内容：</span>
            <div className="comment-field-input">
              <textarea
              ref ={(textarea) =>this.textarea=textarea}
                value={this.state.content}
                onChange={this.hanldeContentChange}
              />
            </div>
          </div>
          <div className="comment-field-button">
            <button onClick = {this.hanldeSubmit}>发布</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentInput;
