import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import notFound from '../images/notFound.jpg';
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper/Paper";
import Button from "@material-ui/core/Button/Button";
import {Grid} from "@material-ui/core";
import Pin from './Pin';

const styles = {
    img: {
        width: 400,
        height: 400,
        position: 'relative',
        top: '20px',
        display: 'block',
        margin: 'auto',
    },
    paper: {
        width: '410px',
        height: '430px',
        margin: 'auto',
        marginTop: '50px',
        marginBottom: '30px',
        transform: 'rotate(-7deg)',
        position: 'relative',
        borderRadius: '10px',
        backgroundColor: 'black',
    },
    pin: {
        position: 'absolute',
        top: '-40px',
        left: '190px',
        height: '50px',
        width: '50px',
    }
};

class NotFound extends Component {

    componentDidMount() {
        this.props.showNavigation(false);
    };

    componentWillUnmount() {
        this.props.showNavigation(true);
    };

    render() {
        const { classes } = this.props;

        return (
            <Grid container direction='column' alignItems='center' spacing={16}>
                <Grid item>
                    <Paper className={classes.paper}>
                       <Pin left='190px' top='-40px'/>
                        <img
                            alt='page not found'
                            src={notFound}
                            className={classes.img}
                        />
                    </Paper>
                </Grid>
                <Grid item>
                    <Button
                        color='primary'
                        size='large'
                        variant='extended'
                        type='button'
                    >
                        <Link to="/">Return to Home Page</Link>
                    </Button>
                </Grid>
            </Grid>

        )
    }
};

export default withStyles(styles)(NotFound);