import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {handleInitialData} from "../actions/shared";
import Login from './Login';
import LoadingBar from 'react-redux-loading';
import Home from "./Home/Home";
import Nav from "./Nav";
import NewPoll from "./NewPoll/NewPoll";
import Leaderboard from "./Leaderboard/Leaderboard";
import Poll from "./Poll/Poll";
import NotFound from "./NotFound";
import { PrivateRoute } from "./PrivateRoute";
import { withStyles } from '@material-ui/core/styles';
import Footer from "./Footer";

const styles = theme => ({
    '@global': {
        'html, body, #root': {
            height: '100%'
        },
        'body': theme.background
    }
});

class Main extends Component {

    state = {
        showNav: false,
        currentTab: 'home',
    };

    componentDidMount() {
        this.props.dispatch(handleInitialData());
    };

    showNavigation = (value) => {
        this.setState(() => ({
            showNav: value
        }))
    };

    changeNavTab = (currentTab) => {
        if (currentTab !== this.state.currentTab) {
            this.setState(() => ({
                currentTab: currentTab
            }))
        }
    };

    render() {
        const { showNav, currentTab } = this.state;
        const { loading, loggedIn } = this.props;

        return (
            <Router>
                <Fragment>
                    <LoadingBar style={{backgroundColor: "blue", position: "relative", top:"-80px"}}/>
                    {loading === true
                        ? null
                        :   (<Fragment>
                                {showNav && <Nav currentTab={currentTab}/>}
                                <Switch>
                                    <PrivateRoute
                                        exact path='/'
                                        component={Home}
                                        isLoggedIn={loggedIn}
                                        ownProps={{changeNavTab: this.changeNavTab}}
                                    />
                                    <PrivateRoute
                                        path='/add'
                                        component={NewPoll}
                                        isLoggedIn={loggedIn}
                                        ownProps={{changeNavTab: this.changeNavTab}}
                                    />
                                    <PrivateRoute
                                        path='/leaderboard'
                                        component={Leaderboard}
                                        isLoggedIn={loggedIn}
                                        ownProps={{changeNavTab: this.changeNavTab}}
                                    />
                                    <PrivateRoute
                                        path='/questions/:question_id'
                                        component={Poll}
                                        isLoggedIn={loggedIn}
                                        ownProps={{changeNavTab: this.changeNavTab,showNavigation:this.showNavigation}}
                                    />

                                    <Route path='/login' render={(props) => (
                                        <Login {...props} showNavigation={this.showNavigation}/>)} />
                                    <Route
                                        path='*'
                                        status={404}
                                        render={() => (<NotFound showNavigation={this.showNavigation}/>)}
                                    />
                                </Switch>
                                {showNav && <Footer />}
                            </Fragment>
                        )}
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        loading: Object.keys(users)[0] === undefined,
        loggedIn: authedUser !== null,
    }
}

export default withStyles(styles)(connect(mapStateToProps)(Main));
