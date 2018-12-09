import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid/Grid";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Typography from "@material-ui/core/Typography/Typography";

const styles = theme => ({
    smallAvatar: {
        width: 30,
        height: 30,
        float: 'right',
        marginLeft: '5px',
        border: `1px solid ${theme.palette.secondary.main}`,
    },
    title: {
        float: 'right',
        marginTop: '3px',
    }
});

const PollHeader = ({author, classes}) => {
    return (
        <Grid item container direction='column' alignItems='center' spacing={8}>
            <Grid item>
                <Typography variant='h4'>
                    Would you rather?
                </Typography>
            </Grid>
            <Grid item>
                <Avatar alt={author.name} src={author.avatarURL} className={classes.smallAvatar} />
                <Typography variant="h6" color="secondary" className={classes.title}>
                    {`asked by ${author.name}`}
                </Typography>
            </Grid>
        </Grid>
    )
};

export default withStyles(styles)(PollHeader);