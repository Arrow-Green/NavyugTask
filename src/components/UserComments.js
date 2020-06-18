import React, {Component} from 'react';
import {API, fetchUserComments, store} from "../index";
import {connect} from "react-redux";
import {findingElementInArray} from "./helper";

class UserComments extends Component {
    componentDidMount() {
        const { match: { params } } = this.props;
        store.dispatch(fetchUserComments(`${API}/posts/${params.postId}/comments`));
    }
    onBack = () => {
        this.props.history.push('/');
    };
    render() {
        const {comments, posts, users, match: { params } } = this.props;
        return (
            <div>
                <div style={{display: 'flex', margin: '50px 0'}}>
                    <button onClick={this.onBack}> Back to home </button>
                    <h1 style={{textAlign: 'center', flexGrow: 1}}>{findingElementInArray(params.userId, users) && findingElementInArray(params.userId, users).name}</h1>
                </div>
                <h3 style={{marginBottom: '30px'}}>{posts.title}</h3>
                {comments.map(data => (
                    <div key={data.id} style={{marginBottom: '10px'}}>
                        <h4>{data.name}</h4>
                        <h6>{data.body}</h6>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {posts,comments, users} = state.Users;
    return {
        comments,
        posts,
        users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserComments: (url) => dispatch(fetchUserComments(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComments);