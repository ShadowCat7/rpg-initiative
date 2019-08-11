import createMuiTheme from '@material-ui/core/es/styles/createMuiTheme.js';

import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import lightGreen from '@material-ui/core/colors/lightGreen';
import lime from '@material-ui/core/colors/lime';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

export default (options) => createMuiTheme({
    overrides: {
        MuiDivider: {
            root: {
                backgroundColor: 'rgba(0, 0, 0, 0.18)',
            },
        },
    },
    typography: {
        useNextVariants: true,
        h6: {
            lineHeight: 1.0,
            marginBottom: '10px',
        },
    },
    palette: {
        primary: pink,
        secondary: blue,
        type: options.darkMode ? 'dark' : 'light',

        pink,
        blue,
        green,
        grey,
        lightGreen,
        lime,
        red,
    },
});