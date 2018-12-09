import { combineReducers } from 'redux';
import users from './users';
import authedUser from './authedUser';
import theme from './theme';
import { loadingBarReducer } from 'react-redux-loading';
import questions from "./questions";

export default combineReducers({
    users,
    questions,
    authedUser,
    theme,
    loadingBar: loadingBarReducer,
});