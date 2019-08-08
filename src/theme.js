import createMuiTheme from '@material-ui/core/es/styles/createMuiTheme.js';

import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import lightGreen from '@material-ui/core/colors/lightGreen';
import lime from '@material-ui/core/colors/lime';
import pink from '@material-ui/core/colors/pink';

export default createMuiTheme({
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
        // #e91e63
        primary: pink,
        secondary: blue,

        green,
        grey,
        lightGreen,
        lime,
    },
});