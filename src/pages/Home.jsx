import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography/Typography.js';

import LoremIpsum from '../components/LoremIpsum.jsx';

class Home extends Component {
    render() {
        return (
            <div>
                <Typography variant="h3">
                    Home page
                </Typography>
                <LoremIpsum />
            </div>
        );
    }
}

export default Home;