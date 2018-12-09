import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Avatar, Paper, Typography } from '@material-ui/core';
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
        padding: '40px 10px',
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

class LeadersEntry extends Component {
    render() {
        const { user, classes } = this.props;

        return (
            <Paper className={classes.paper}>
                <Pin left='200px' top='-30px'/>
                <Grid container spacing={16} className={classes.container}>
                    <Grid item xs={4}>
                        <Avatar alt={user.name} src={user.avatarURL} className={classes.bigAvatar}/>
                    </Grid>
                    <Grid item xs={8} container direction='column' alignItems='center' spacing={16}>
                        <Grid item>
                            <Typography variant='h4'>
                                {user.name}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6' color='secondary'>
                                Questions asked: {user.questions.length}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6' color='secondary'>
                                Questions answered: {Object.keys(user.answers).length}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default withStyles(styles)(LeadersEntry);
