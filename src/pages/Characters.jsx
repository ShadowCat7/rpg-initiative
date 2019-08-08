import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography/Typography.js';

import LoremIpsum from '../components/LoremIpsum.jsx';

class Characters extends Component {
    render() {
        return (
            <div>
                <Typography variant="h3">
                    Characters
                </Typography>
                <LoremIpsum />
            </div>
        );
    }
}

export default Characters;