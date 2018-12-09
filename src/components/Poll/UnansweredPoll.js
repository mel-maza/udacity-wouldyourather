import React, { Component } from 'react';
import { connect } from 'react-redux';
import PollHeader from "./PollHeader";
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography/Typography";
import {handleAnswerQuestion} from "../../actions/questions";

const styles = theme => ({
    container: {
        padding: '30px 10px',
        paddingRight: '15px',
    },
    button: {
        width: '330px',
        height: '182px',
    }
});

class UnansweredPoll extends Component {

    handleButtonClick = (event) => {
        event.preventDefault();
        const option = event.currentTarget.name;
        const { dispatch, authedUser, poll, handleAnswerQuestionForRerender } = this.props;

        dispatch(handleAnswerQuestion(poll.id, authedUser, option));

        handleAnswerQuestionForRerender();
    }

    render() {
        const { poll, author, classes } = this.props;

        return (
            <Grid container spacing={24} className={classes.container}>
                <PollHeader author={author} />
                <Grid item container direction='row' alignItems='center' justify='space-evenly'>
                    <Grid item>
                        <Button
                            type='button'
                            name='optionOne'
                            variant='contained'
                            color='secondary'
                            className={classes.button}
                            onClick={this.handleButtonClick}
                        >
                            <Typography variant="h6" color="primary">
                                "{poll.optionOne.text}"
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            type='button'
                            name='optionTwo'
                            variant='contained'
                            color='secondary'
                            className={classes.button}
                            onClick={this.handleButtonClick}
                        >
                            <Typography variant="h6" color="primary">
                                "{poll.optionTwo.text}"
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

function mapStateToProps({ questions, users, authedUser}, {pollId, handleAnswerQuestionForRerender}) {

    const poll = questions[pollId];

    return {
        poll: poll,
        authedUser: authedUser,
        author: users[poll.author],
        handleAnswerQuestionForRerender,
    }

}

export default withStyles(styles)(connect(mapStateToProps)(UnansweredPoll));