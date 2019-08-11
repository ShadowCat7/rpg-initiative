import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import Card from '@material-ui/core/Card/Card.js';
import CardHeader from '@material-ui/core/CardHeader/CardHeader.js';
import CardContent from '@material-ui/core/CardContent/CardContent.js';

import Container from '../redux/Container.jsx';
import FlexBox from './FlexBox.jsx';

const styles = (theme) => ({
    root: {
        clear: 'both',
        float: 'left',
        margin: '5px 0',
        minWidth: '200px',
    },
    content: {
        padding: '10px',

        '&:last-child': {
            padding: '10px',
        }
    },
});

class FlexCard extends Component {
    render() {
        const {
            classes,
            columns,
            header,
            settings,
        } = this.props;

        return (
            <Card classes={{ root: classes.root }} raised={settings.darkMode}>
                {header &&
                    <CardHeader
                        disableTypography
                        title={header}
                    />
                }
                <CardContent className={classes.content}>
                    <FlexBox columns={columns} />
                </CardContent>
            </Card>
        );
    }
}

export default Container(withStyles(styles)(FlexCard));