import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends React.Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

	static getDerivedStateFromProps(props,state) {
		console.log(props);
		console.log(state);
		return this.props;
		// if (nextProps.newPost) {
		// 	this.props.posts.unshift(nextProps.newPost);
		// }
	}

    render () {
        var postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
	newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
	newPost: state.posts.item
});
export default connect(mapStateToProps, {fetchPosts}) (Posts);
