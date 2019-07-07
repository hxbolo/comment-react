import React, { Component } from "react";
import ComentInput from "./ComentInput";
import CommentList from "./CommentList";

class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };
  }

  handleSubmitComment(comment) {

    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    console.log(comment);
    const comments = this.state.comments

    comments.push(comment);
    this.setState({comments})
    this._saveComment(comments)
    console.log(this.state.comments);
  }

  handleDeleteCommet(index){
    console.log(index);
    const comments = this.state.comments
    comments.splice(index,1)
    this.setState({ comments })
    this._saveComment(comments)
    console.log(comments);
    
    
  }

  componentWillMount(){
    this._loadComents()
  }

  _loadComents(){
    let comments = localStorage.getItem('comments')
    if(comments){
      comments = JSON.parse(comments)
      this.setState({comments})
    }
  }

  _saveComment(comments){
    localStorage.setItem('comments',JSON.stringify(comments))
    
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <ComentInput onSubmit={this.handleSubmitComment.bind(this)} />

          <CommentList
          onDeleteComment = {this.handleDeleteCommet.bind(this)}
           comments ={this.state.comments} />
        </div>
      </div>
    );
  }
}

export default CommentApp;
