import React, {Component} from 'react';
import {API, fetchUserPosts, store} from "../index";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {findingElementInArray} from "./helper";

class UserPosts extends Component {
    componentDidMount() {
        const { match: { params } } = this.props;
        store.dispatch(fetchUserPosts(`${API}/posts/${params.userId}`))
    }
    render() {
        const {posts, match: { params }, users} = this.props;
        console.log('findingElementInArray(params.userId, users)', findingElementInArray(params.userId, users));
        return (
            <div>
                <h2 style={{textAlign: 'center', marginBottom: '50px'}}>{findingElementInArray(params.userId, users) && findingElementInArray(params.userId, users).name}</h2>
                <div>
                    <h3>{posts.title}</h3>
                    <p>{posts.body}</p>
                    <Link to={`/user/${params.userId}/${posts.id}`}>View Comments</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {posts, users} = state.Users;
    return {
        posts,
        users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserPosts: (url) => dispatch(fetchUserPosts(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);