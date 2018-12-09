import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon";

const styles = theme => ({
    pin: {
        position: 'absolute',
        height: '50px',
        width: '50px',
    }
})

const Pin = (props) => {
    const { classes, left, top } = props;

    return (
    <SvgIcon
        color='secondary'
        transform='rotate(42)'
        fontSize='large'
        viewBox='-6 -6 24 24'
        className={classes.pin}
        style={{top: top, left: left}}
    >
        <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" />
    </SvgIcon>
    )
};

function mapStateToProps(state, props) {
    return {
        left: props.left,
        top: props.top
    }
}

export default withStyles(styles)(connect(mapStateToProps)(Pin));
