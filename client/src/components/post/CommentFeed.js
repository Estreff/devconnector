import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

class CommentFeed extends Component {
  render() {
    const { comments, postID } = this.props;

    return comments.map(comment => (
      <CommentItem key={comment._id} postID={postID} comment={comment} />
    ));
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  postID: PropTypes.string.isRequired
};

export default CommentFeed;
