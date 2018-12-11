import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import AnsweredPollOption from "./AnsweredPollOption";
import PollHeader from "./PollHeader";

const styles = theme => ({
    container: {
        padding: '30px 10px',
        paddingRight: '15px',
    },
});

class AnsweredPoll extends Component {
    render() {
        const { classes, poll, authedUser, author, users } = this.props;

        const optionOneVotes = poll.optionOne.votes.length;
        const optionTwoVotes = poll.optionTwo.votes.length;
        const totalOptionVotes = optionOneVotes + optionTwoVotes;
        const optionOnePercent = Math.round((optionOneVotes/totalOptionVotes)*100);
        const optionTwoPercent = Math.round((optionTwoVotes/totalOptionVotes)*100);

        const yourVoteIsOptionOne = poll.optionOne.votes.includes(authedUser);

        return (
            <Grid container spacing={24} className={classes.container}>
                <PollHeader author={author} />
                <Grid item container direction='row' justify='space-evenly' alignItems='center'>
                    {yourVoteIsOptionOne
                        ?   <Badge badgeContent={'YOUR VOTE'}>
                                <AnsweredPollOption
                                    optionText={poll.optionOne.text}
                                    votes={optionOneVotes}
                                    percentage={optionOnePercent}
                                />
                            </Badge>
                        :   <AnsweredPollOption
                                optionText={poll.optionOne.text}
                                votes={optionOneVotes}
                                percentage={optionOnePercent}
                            />
                    }
                    {!yourVoteIsOptionOne
                        ?   <Badge badgeContent={'YOUR VOTE'}>
                                <AnsweredPollOption
                                    optionText={poll.optionTwo.text}
                                    votes={optionTwoVotes}
                                    percentage={optionTwoPercent}
                                />
                            </Badge>
                        :   <AnsweredPollOption
                                optionText={poll.optionTwo.text}
                                votes={optionTwoVotes}
                                percentage={optionTwoPercent}
                            />
                    }
                </Grid>
            </Grid>
        )
    }
}

function mapStateToProps({ questions, users, authedUser}, {pollId}) {

    const poll = questions[pollId];

    return {
        poll: poll,
        authedUser: authedUser,
        author: users[poll.author],
        users: users
    }

}

export default withStyles(styles)(connect(mapStateToProps)(AnsweredPoll));