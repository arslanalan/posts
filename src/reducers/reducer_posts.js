import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            //we manage the local storage
            //we delete the the post from state because slow internet connection or
            //any other issues are possible
            //So after deletion of post, we immediately delete it from the state
            return _.omit(state, action.payload);
            //action.payload keeps the "id" of deleted post
            //_.omit() lodash function delete the key-value pair from state if action.payload key is exist in state

        case FETCH_POST:
            //const post = action.payload.data;
            //const newState = { ...state };
            //newState[post.id] = post;
            //return newState;
            return { ...state, [action.payload.data.id]: action.payload.data };   //identical to that four lines of code
            //If newly fetched post is exist in state update it, otherwise add it to state.

        case FETCH_POSTS:
            //console.log(action.payload.data); //expect [post1, post2 ]
            //need transformation to { 4: post }
            //lodash library has a method doing exactly the same thing
            return _.mapKeys(action.payload.data, 'id');

        default:
            return state;
    }
}
