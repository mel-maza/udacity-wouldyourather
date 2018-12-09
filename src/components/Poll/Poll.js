import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {Paper} from "@material-ui/core";
import AnsweredPoll from "./AnsweredPoll";
import UnansweredPoll from "./UnansweredPoll";
import NotFound from "../NotFound";
import Pin from '../Pin';

const styles = theme => ({
    paper: {
        width: '750px',
        height: '350px',
        margin: 'auto',
        marginTop: '70px',
        marginBottom: '30px',
        transform: 'rotate(3deg)',
        position: 'relative',
        borderRadius: '10px',
        backgroundColor: theme.palette.primary.main,
    },
    paperWithFoldedCorner: {
        width: '450px',
        height: '250px',
        margin: 'auto',
        marginTop: '50px',
        marginBottom: '30px',
        boxShadow: '-7px -7px 10px rgba(20,20,20,0.2)',
        transform: 'rotate(-7deg)',
        position: 'relative',
    },
    innerContainer: {
        marginRight: '0px'
    },
    bigAvatar: {
        width: 90,
        height: 90,
        margin: 'auto',
        marginTop: '15px',
        border: `2px solid ${theme.palette.secondary.main}`,
    }
});

class Poll extends Component {
    state = {
        isAnswered: this.props.isAnswered
    };

    componentDidMount() {
        this.props.changeNavTab('disabled');
    }

    handleAnswerQuestionForRerender = () => {
        this.setState(() => ({
            isAnswered: true,
        }))
    };

    render() {
        const { poll, showNavigation, classes } = this.props;
        const { isAnswered } = this.state;

        if (poll === undefined) {
            return <NotFound showNavigation={showNavigation}/>
        }

        return (
            <Paper className={classes.paper}>
                <Pin left='350px' top='-30px'/>
                {isAnswered
                    ? <AnsweredPoll pollId={poll.id}/>
                    : <UnansweredPoll
                        pollId={poll.id}
                        handleAnswerQuestionForRerender={this.handleAnswerQuestionForRerender}
                    />
                }
            </Paper>

        )
    }
}

function mapStateToProps({questions, users, authedUser}, props) {
    const { question_id } = props.match.params;
    const poll = questions[question_id];
    let pollIsAnswered = false;
    if (authedUser !== null) {
        pollIsAnswered = Object.keys(users[authedUser].answers).includes(question_id);
    }

    return {
        poll: poll,
        isAnswered: pollIsAnswered,
        showNavigation: props.ownProps.showNavigation,
        changeNavTab: props.ownProps.changeNavTab,
    }
}

export default withStyles(styles)(connect(mapStateToProps)(Poll));