import React, {Component} from 'react';
import {Link} from "react-router-dom";

class UserCard extends Component {
    render() {
        const {name, description, id} = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <Link to={`/user/${id}`}>
                    Details
                </Link>
            </div>
        )
    }
}

export default UserCard;