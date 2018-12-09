import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Nav extends Component {
    state = {
        activeTab: this.props.currentTab,
        doRedirect: false,
    };

    componentDidUpdate(prevProps) {
        if (this.props.currentTab !== prevProps.currentTab) {
            this.setState(() => ({
                activeTab: this.props.currentTab
            }))
        }
    }

    handleChange = (event, activeTab) => {
        this.setState(() => ({
            activeTab
        }))
    };

    render() {
        const { activeTab, doRedirect } = this.state;

        if (doRedirect === true) {
            return <Redirect to='/login' />
        };

        return (
            <AppBar position="fixed">
                <Toolbar>
                    <Tabs value={activeTab} onChange={this.handleChange} centered>
                        <Tab value='disabled' label={activeTab === 'disabled' ? 'Poll' : ''} disabled />
                        <Tab value='home' label='Home' to='/' component={Link}/>
                        <Tab value='new' label='New Poll' to='/add' component={Link}/>
                        <Tab value='leaderboard' label='Leaderboard' to='/leaderboard' component={Link}/>
                    </Tabs>
                </Toolbar>
            </AppBar>
        )
    }
};

export default Nav;

