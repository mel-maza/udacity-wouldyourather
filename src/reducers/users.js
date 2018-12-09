import {RECEIVE_USERS} from "../actions/users";
import {ADD_QUESTION, ANSWER_QUESTION, UNDO_ANSWER} from "../actions/questions";


export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users,
            };
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.pollId]: action.option
                    }
                }
            };
        case UNDO_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: Object.keys(state[action.authedUser].answers).reduce((object, key) => {
                        if (key !== action.pollId) { object[key] = state[action.authedUser].answers[key]}
                        return object
                    }, {})
                }
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            };
        default:
            return state
    }
}