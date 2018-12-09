import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, Chip } from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";

const styles = theme => ({
    button: {
        width: '330px',
        height: '182px',
}
});

const AnsweredPollOption = ({optionText, votes, percentage, classes}) => {
    return (
        <Grid item >
            <Button
                type='button'
                variant='contained'
                color='primary'
                className={classes.button}
                disabled
            >
                <Grid container direction='column' alignItems='center' spacing={8}>
                    <Grid item xs={10}>
                        <Typography variant="h6">
                            "{optionText}"
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Chip label={`${votes} vote(s)`} color='secondary' />
                    </Grid>
                    <Grid item>
                        <Chip label={`${percentage} %`} color='secondary' />
                    </Grid>
                </Grid>
            </Button>
        </Grid>
    );
};

export default withStyles(styles)(AnsweredPollOption);