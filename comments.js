import React, { Component } from 'react';
import { render } from 'react-dom';

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <p className="comment-header">Author: {this.props.author}</p>
                <p className="comment-body">Comment: {this.props.body}</p>
                <div className="comemnt-footer">
                    <a href="#" className="comment-footer-delete">
                        Delete comment
                    </a>
                </div>
            </div>
        );
    }
}

class CommentBox extends Component {
    constructor() {
        super();
        this.state = {
            showComments: false
        };
    }
    _getComments() {
        const commentList = [
            {id: 1, author: 'Alex kiura', body: 'Great app!'},
            {id: 1, author: 'Steve Job', body: 'I couldn\'t agree more!'},
        ];
        return commentList.map((comment) => {
            return (<Comment author={comment.author} body={comment.body}/>);
        });
    }

    _getCommentsTitle(commentCount) {
        if (commentCount === 0) {
            return 'No comments yet';
        } else if (commentCount === 1) {
            return '1 comment';
        } else {
            return `${commentCount} comments`;
        }
    }
    render() {
        const comments = this._getComments();
        if (this.state.showComments) {
            commentNodes = <div className="comment-list">{comments}</div>;
        }
        return(
            <div className="comment-box">
                <h3>comments</h3>
                <h4 className="comment-count">
                    {this._getCommentsTitle(comments.length)}
                </h4>
                {commentNodes}
            </div>
        );
    }
}

render(<CommentBox />, document.getElementById('story-app'));