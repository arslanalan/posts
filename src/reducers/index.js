import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer
    //keyword "form" is extremely important, don't make a mistake in typo
});

export default rootReducer;
