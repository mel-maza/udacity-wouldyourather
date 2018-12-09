import { showLoading, hideLoading } from 'react-redux-loading';
import {saveQuestion, saveQuestionAnswer} from "../utils/api";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const UNDO_ANSWER = 'UNDO_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
};

export function answerQuestion({pollId, authedUser, option}) {
    return {
        type: ANSWER_QUESTION,
        pollId,
        authedUser,
        option
    }
}

function undoAnswer({pollId, authedUser, option}) {
    return {
        type: UNDO_ANSWER,
        pollId,
        authedUser,
        option
    }
}

export function handleAnswerQuestion(pollId, authedUser, option) {
    return (dispatch) => {
        dispatch(answerQuestion({pollId, authedUser, option}));

        return saveQuestionAnswer({
            qid: pollId,
            authedUser,
            answer: option
        })
            .catch((error) => {
                console.warn('Error in handleAnswerQuestions: ', error)
                dispatch(undoAnswer({pollId, authedUser, option}))
                alert('There was an error answering the question. Try again.')
            })
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
};

export function handleAddQuestion(optionA, optionB, authedUser) {
    return (dispatch) => {
        dispatch(showLoading());

        return saveQuestion({
            optionOneText: optionA,
            optionTwoText: optionB,
            author: authedUser
        })
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
    }
}