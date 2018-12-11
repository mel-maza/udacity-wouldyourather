import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {handleAddQuestion} from "../../actions/questions";
import {Redirect} from "react-router";
import {Paper, Typography} from "@material-ui/core";
import Pin from '../Pin';

const styles = theme => ({
    paper: {
        width: '400px',
        height: '275px',
        margin: 'auto',
        marginTop: '50px',
        marginBottom: '30px',
        transform: 'rotate(7deg)',
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

class NewPoll extends Component {
    state = {
        optionA: '',
        optionB: '',
        toHome: false,
    }

    componentDidMount() {
        this.props.changeNavTab('new');
    }

    handleChangeA = (event) => {
        event.persist();
        this.setState(() => ({
            optionA: event.target.value
        }))
    }

    handleChangeB = (event) => {
        event.persist();
        this.setState(() => ({
            optionB: event.target.value
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { optionA, optionB } = this.state;
        const { dispatch, authedUser } = this.props;

        dispatch(handleAddQuestion(optionA, optionB, authedUser));

        this.setState(() => ({
            optionA: '',
            optionB: '',
            toHome: true,
        }))
    }

    render() {
        const { optionA, optionB, toHome } = this.state;
        const { classes } = this.props;

        if (toHome) {
            return <Redirect to='/' />
        }

        return (
            <Paper className={classes.paper}>
                <Pin left='200px' top='-30px'/>
                <Grid container direction='column' alignItems='center' alignContent='center' spacing={16} className={classes.container}>
                    <Grid item xs={12}>
                        <Typography variant='h4'>
                            Would you rather?
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            type='text'
                            value = {optionA}
                            placeholder='Type in Option A'
                            autoFocus={true}
                            onChange={this.handleChangeA}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            type='text'
                            value={optionB}
                            placeholder='Type in Option B'
                            onChange={this.handleChangeB}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type='submit'
                            variant='extended'
                            color='secondary'
                            disabled={optionA === '' || optionB === ''}
                            onClick={this.handleSubmit}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

function mapStateToProps({authedUser}, props) {
    return {
        authedUser: authedUser,
        changeNavTab: props.ownProps.changeNavTab,
    }
}

export default withStyles(styles)(connect(mapStateToProps)(NewPoll));