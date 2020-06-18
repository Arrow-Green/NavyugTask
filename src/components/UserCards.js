import React, {Component} from 'react';
import { connect} from 'react-redux';
import {API, fetchUsers} from "../index";
import {store} from "../index";
import UserCard from "./UserCard";

class UserCards extends Component{
    componentDidMount() {
        store.dispatch(fetchUsers(`${API}/users`));
    }
    render(){
        const {users} = this.props;
        return(
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {users.map(data =>
                    <div style={{marginRight: '20px', marginBottom: '20px', width: '300px'}}>
                        <UserCard name={data.name} description={data.email} id={data.id} key={data.id}/>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.Users.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: (url) => dispatch(fetchUsers(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCards);