import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostIndex extends Component {
    componentDidMount() {
        //wait for data loading
        this.props.fetchPosts();
    }

    renderPosts() {
        //this.props.posts.map is not possible, because this.props.posts is an object, not array
        //So, we'll use lodash's _.map method
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            );
        });
    }

    render() {
        console.log(this.props.posts);
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

//Remember when everyone to consume anything from application level state
//we always define our map state to prop's function
function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);
//mapDispatchToProps() function is not used, it's not required in most cases
//Just in some cases it's needed like doing some computing
//function mapDispatchToProps(dispatch) {
//    return bindActionCreators({ fetchPosts }, dispatch);
//}