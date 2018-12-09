import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {blueGrey, cyan, purple} from "@material-ui/core/colors";
import background from "../images/neven-krcmarek-425319-unsplash.jpg";
import Main from "./Main";
import {receiveTheme} from "../actions/theme";
import {LoadingBar} from "react-redux-loading";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: [
            'Indie Flower',
            'cursive',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        fontSize: 16,
        fontWeightLight: '400',
        fontWeightMedium: '600',
        fontWeightRegular: '500',
        button: {
            fontSize: '1.2rem'
        }
    },
    palette: {
        primary: {
            main: cyan['500'],
        },
        secondary: {
            main: blueGrey['600'],
            contrastText: '#fff',
        },
    },
    overrides: {
        MuiTypography: {
            h4: {
                color: 'white',
            },
            h5: {
                color: 'white',
            }
        },
        MuiToolbar: {
            root: {
                alignItems: 'center',
                justifyContent: 'center',
            }
        },
        MuiTab: {
            label: {
                fontSize: '1.2rem',
            }
        },
        MuiInput: {
            root: {
                fontSize: '1.5rem',
            }
        },
        MuiBadge: {
            badge: {
                height: Math.floor(2 * 18),
                width: Math.floor(2 * 18),
                backgroundColor: purple['A400'],
                color: 'white',
                textAlign: 'center',
                fontWeight: '600',
                padding: '5px',
            }
        },
        MuiChip: {
            label: {
                fontSize: '1.1rem',

            },
            colorSecondary: {
                backgroundColor: "purple",
            }
        },
        MuiSelect: {
            root: {
                width: '250px',
            }
        }
    },
    background: {
        backgroundImage: `url(${background})`,
        backgroundSize: '1200px 900px',
        paddingTop: '80px',
    }
});

class App extends Component {
    componentDidMount() {
        this.props.dispatch(receiveTheme(theme));
    }

    render() {
        const {loading, theme} = this.props;

        return (
            <Fragment>
                <LoadingBar style={{backgroundColor: "blue", position: "relative", top:"-80px"}}/>
                {loading === true
                    ? null
                    : <MuiThemeProvider theme={theme}>
                        <Main />
                      </MuiThemeProvider>
                }
            </Fragment>
        )
    }
};

function mapStateToProps({theme}) {
    return {
        theme: theme,
        loading: theme === null,
    }
}

export default connect(mapStateToProps)(App);