import {FETCH_USERS, FETCH_USER_POSTS} from '../actions/index';

const initState = {
    users: [],
    posts: {},
    comments: [],
};

export default function(state=initState, action){
    switch(action.type){
        case 'FETCH_USERS':
            return {
                ...state,
                users: [...action.payload],
            };
        case 'FETCH_USER_POSTS':
            return {
                ...state,
                posts: action.payload,
            };
        case 'FETCH_USER_COMMENTS':
            return {
              ...state,
              comments: action.payload,
            };
        default:
            return state;
    }
}