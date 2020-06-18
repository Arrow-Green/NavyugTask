import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsNew from './components/UserCards.js';
import UserCards from "./components/UserCards";
import UserPosts from "./components/UserPosts";
import UserComments from "./components/UserComments";

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
export const store = createStore(reducers, applyMiddleware(thunk));
export const API = 'https://jsonplaceholder.typicode.com';

export function fetchUsers(url) {
    return function (dispatch) {axios.get(url).then(res => dispatch(fetchedUsers(res.data)))}
}

export function fetchUserPosts(url) {
    return function (dispatch) {axios.get(url).then(res => dispatch(fetchedUserPosts(res.data)))}
}

export function fetchUserComments(url) {
    return function (dispatch) {axios.get(url).then(res => dispatch(fetchedUserComments(res.data)))}
}

export function fetchedUsers(users) {
    return {
        type: 'FETCH_USERS',
        payload: users,
    };
}

export function fetchedUserPosts(posts) {
    return {
        type: 'FETCH_USER_POSTS',
        payload: posts,
    };
}

export function fetchedUserComments(comments) {
    return {
        type: 'FETCH_USER_COMMENTS',
        payload: comments,
    };
}


ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
          <div>
              <Switch>
                  {/*<Route path="/" component={PostsNew} />*/}
                  <Route path="/user/:userId/:postId" component={UserComments} />
                  <Route path="/user/:userId" component={UserPosts} />
                  <Route path="/" component={UserCards} />

              </Switch>
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
