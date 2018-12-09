import {ADD_QUESTION, ANSWER_QUESTION, RECEIVE_QUESTIONS, UNDO_ANSWER} from "../actions/questions";

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.pollId]: {
                    ...state[action.pollId],
                    [action.option]: {
                        ...state[action.pollId][action.option],
                        votes: state[action.pollId][action.option].votes.concat([action.authedUser])
                    }
                }
            };
        case UNDO_ANSWER:
            return {
                ...state,
                [action.pollId]: {
                    ...state[action.pollId],
                    [action.option]: {
                        ...state[action.pollId][action.option],
                        votes: state[action.pollId][action.option].votes
                                .filter((vote) => (vote !== action.authedUser))
                    }
                }
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            };
        default:
            return state
    }
};