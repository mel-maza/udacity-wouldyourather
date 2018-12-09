import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import {setAuthedUser} from "../actions/authedUser";
import {Redirect} from "react-router-dom";
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    container: {
        padding: '30px 10px',
        paddingRight: '15px',
    },
    select: {
        width: '40%'
    },
    form: {
        position: 'relative',
        margin: 'auto',
        verticalAlign: 'center',
        width: '600px',
        height: '700px',
        backgroundColor: 'white',
        textAlign: 'center',
    }
});

class Login extends Component {
    state = {
        authedUserId: '',
        doRedirect: false,
    };

    componentWillMount() {
        this.props.showNavigation(false);
    };

    componentWillUnmount() {
        this.props.showNavigation(true);
    };

    handleChange = (event) => {
        const authedUserId = event.target.value;
        this.setState(() => ({
            authedUserId
        }))
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { dispatch } = this.props;

        dispatch(setAuthedUser(this.state.authedUserId));

        this.setState(() => ({
            authedUserId: '',
            doRedirect: true,
        }))
    };

    render() {
        const { users, classes, from } = this.props;
        const { authedUserId, doRedirect } = this.state;

        if (doRedirect === true) {
            return <Redirect to={from.from.pathname} />
        }

        return (
            <form onSubmit={this.handleSubmit} className={classes.form}>
                <Grid direction="column" container alignContent='center' alignItems='center' spacing={24} className={classes.container}>
                    <Grid item xs={12}>
                        <Typography variant='h5' color='secondary' align='center'>
                            Log in to ' Would you rather? '
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl>
                            <Select
                                value={authedUserId}
                                onChange={this.handleChange}
                                name='user'
                                displayEmpty
                            >
                                <MenuItem value='' disabled>Select user</MenuItem>
                                {users.map((user) => (
                                    <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            color='secondary'
                            size='large'
                            variant='extendedFab'
                            type='submit'
                            disabled={authedUserId === ''}
                        >
                            Sign in
                        </Button>
                    </Grid>
                </Grid>
            </form>
        )
    }
}

function mapStateToProps ({ users }, props) {
    return {
        users: Object.values(users),
        from: props.location.state || { from: { pathname: '/'}},
        showNavigation: props.showNavigation
    }
}
export default withStyles(styles)(connect(mapStateToProps)(Login));
