// Module imports to load in dependencies
// Uses both default & named imports
import React, {Component, PropTypes} from 'react';
import Comment from './Comment';

// Class definition (formerly React.createClass)
// Module export as default
export default class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                author: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired
            })
        ).isRequired
    }

    render() {
        let {comments} = this.props;
        let commentNodes = comments.map(({author, id, text}) => (
            <Comment author={author} key={id}>
                {text}
            </Comment>
        ));

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}