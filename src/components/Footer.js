import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import {setAuthedUser} from "../actions/authedUser";
import {changeTheme} from "../actions/theme";

const styles = theme => ({
    left: {
        position: 'absolute',
        right: 0,
        display: 'flex',
        justifyContent: 'center',
    },
    userTitle: {
        marginLeft: '10px',
        marginTop: '5px',
    },
    smallAvatar: {
        width: 50,
        height: 50,
        marginTop: '3px',
        marginRight: '5px',
        border: `2px solid ${theme.palette.secondary.main}`,
    },
    button: {
        margin: '3px 8px',
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

class Footer extends Component {
    state = {
        doRedirect: false,
        bored: true,
        buttonText: `I'm bored`
    };

    handleLogout = (event) => {
        event.preventDefault();

        const { dispatch } = this.props;

        dispatch(setAuthedUser(null));

        this.setState(() => ({
            doRedirect: true,
        }))
    };

    handleBored = (event) => {
        event.preventDefault();
        const currentBored = this.state.bored;
        this.props.dispatch(changeTheme(currentBored));

        this.setState(() => ({
            bored: !currentBored,
            buttonText: (currentBored === true ? 'Back to normal' : `I'm bored`)
        }));

    };

    render() {
        const { authedUserId, users , classes } = this.props;
        const { doRedirect, buttonText } = this.state;

        const currentUser = users[authedUserId];

        if (doRedirect === true) {
            return <Redirect to='/login' />
        };

        return (
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    <Avatar alt={currentUser.name} src={currentUser.avatarURL} className={classes.smallAvatar}/>
                    <Typography variant="h5" className={classes.userTitle}>
                        {`What's up, ${currentUser.name} ?`}
                    </Typography>
                    <Button
                        size='medium'
                        type='button'
                        variant='extended'
                        color='secondary'
                        className={classes.button}
                        onClick={this.handleLogout}
                    >
                        Logout
                    </Button>
                    <Button
                        size='small'
                        variant='extended'
                        color="inherit"
                        style={{marginLeft: '10px'}}
                        onClick={this.handleBored}
                    >
                        {buttonText}
                    </Button>
                </Toolbar>
            </AppBar>
        )
    }
};


function mapStateToProps(state, props) {
    return {
        authedUserId: state.authedUser,
        users: state.users,
    }
}

export default withStyles(styles)(connect(mapStateToProps)(Footer));

