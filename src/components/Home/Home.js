import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, AppBar, Tabs, Tab } from '@material-ui/core';
import PollsList from "./PollsList";
import Toolbar from "@material-ui/core/Toolbar";

class Home extends Component {
    state = {
        value: 0,
    };

    componentDidMount() {
        this.props.changeNavTab('home');
    }

    handleChange = (event, value) => {
        this.setState(() => ({
            value
        }))
    };

    render() {
        const { answeredPolls, unansweredPolls } = this.props;
        const { value } = this.state;

        return (
            <Grid container alignItems='center' justify='space-around' alignContent='center' direction='column'>
                <Grid item xs={12}>
                    <AppBar position='static' color='secondary'>
                        <Toolbar>
                            <Tabs
                                value={value}
                                onChange={this.handleChange}
                                indicatorColor='primary'
                                fullWidth
                                centered
                            >
                                <Tab label='Unanswered Polls' />
                                <Tab label='Answered Polls' />
                            </Tabs>
                        </Toolbar>
                    </AppBar>
                    {value === 0 && <PollsList polls={unansweredPolls}/>}
                    {value === 1 && <PollsList polls={answeredPolls}/>}
                </Grid>
            </Grid>
        )
    }
}

function comparePolls(a,b) {
    if (a.timestamp < b.timestamp) {
        return 1
    };

    if (a.timestamp > b.timestamp) {
        return -1
    };

    return 0;
}

function mapStateToProps({questions, users, authedUser}, props) {
    let answeredPollIds = [];
    if (authedUser !== null) {
        answeredPollIds = Object.keys(users[authedUser].answers);
    };

    return {
        answeredPolls: Object.values(questions)
                        .filter((question) => answeredPollIds.includes(question.id))
                        .sort(comparePolls),
        unansweredPolls: Object.values(questions)
                            .filter((question) => !answeredPollIds.includes(question.id))
                            .sort(comparePolls),
        changeNavTab: props.ownProps.changeNavTab,
    }
}

export default connect(mapStateToProps)(Home);