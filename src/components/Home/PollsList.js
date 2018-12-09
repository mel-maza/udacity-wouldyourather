import React, { Component } from 'react';
import PollView from "./PollView";
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';

const styles = {
    padding: {
        paddingBottom: '50px'
    }
}

class PollsList extends Component {
    render() {
        const { polls, classes } = this.props;

        return (
            <List className={classes.padding}>
                {polls.map((poll) => (
                    <ListItem key={poll.id}>
                        <PollView poll={poll} />
                    </ListItem>
                ))}
            </List>
        )
    }
}

export default withStyles(styles)(PollsList);