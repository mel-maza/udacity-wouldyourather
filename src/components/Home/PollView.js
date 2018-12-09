import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper";
import Pin from '../Pin';

const styles = theme => ({
    paper: {
        width: '400px',
        height: '275px',
        margin: 'auto',
        marginTop: '50px',
        marginBottom: '50px',
        transform: 'rotate(-7deg)',
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
    container: {
        padding: '30px 10px',
        paddingRight: '15px',
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

class PollView extends Component {
    render() {
        const { poll, users, classes } = this.props;


        const author = users[poll.author];

        return (
            <Paper className={classes.paper}>
                <Pin left='200px' top='-30px'/>
                <Grid container alignContent='center' spacing={16} className={classes.container}>
                    <Grid item xs={12}>
                        <Typography variant='h5' align='center'>
                            Asked by {author.name}:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Avatar alt={author.name} src={author.avatarURL} className={classes.bigAvatar} />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={8}
                        container
                        direction='column'
                        alignItems='center'
                        spacing={8}
                        className={classes.innerContainer}
                    >
                        <Grid item>
                            <Typography variant='subtitle1' align='center'>
                                Would you rather?
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1' paragraph={true} align='center'>
                                ...{poll.optionOne.text}...
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                size='medium'
                                variant='extendedFab'
                                color='secondary'
                                to={`/questions/${poll.id}`}
                                component={Link}
                            >
                                View Poll
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

        )
    }
}

function mapStateToProps({users}, {poll}) {

    return {
        users,
        poll
    }
}

export default withStyles(styles)(connect(mapStateToProps)(PollView));