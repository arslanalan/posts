import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POST:
            //const post = action.payload.data;
            //const newState = { ...state };
            //newState[post.id] = post;
            //return newState;
            return { ...state, [action.payload.data.id]: action.payload.data };   //identical to that four lines of code

        case FETCH_POSTS:
            //console.log(action.payload.data); //expect [post1, post2 ]
            //need transformation to { 4: post }
            //lodash library has a method doing exactly the same thing
            return _.mapKeys(action.payload.data, 'id');

        default:
            return state;
    }
}
