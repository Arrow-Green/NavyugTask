import { combineReducers } from 'redux';
import UserReducer from "./UserReducer";
const rootReducer = combineReducers({
    Users: UserReducer,
});

export default rootReducer;
