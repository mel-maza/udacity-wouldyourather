import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, List, ListItem } from '@material-ui/core';
import LeadersEntry from "./LeadersEntry";



class Leaderboard extends Component {

    componentDidMount() {
        this.props.changeNavTab('leaderboard');
    }

    render() {
        const { users } = this.props;

        return (
            <Grid container alignItems='center' justify='space-around' alignContent='center' direction='column'>
                <Grid item xs={12}>
                    <List>
                        {users.map((user) => (
                            <ListItem key={user.id}>
                                <LeadersEntry  user={user} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        )
    }
}

function compareUsers(a,b) {
    const questionsA = Object.keys(a.answers).length + a.questions.length;
    const questionsB = Object.keys(b.answers).length + b.questions.length;

    if (questionsA < questionsB) {
        return 1
    };

    if (questionsA > questionsB) {
        return -1
    };

    return 0;
}

function mapStateToProps ({users}, props) {

    const sortedUsers = Object.values(users).sort(compareUsers);

    return {
        users: sortedUsers,
        changeNavTab: props.ownProps.changeNavTab,
    }
};

export default connect(mapStateToProps)(Leaderboard);