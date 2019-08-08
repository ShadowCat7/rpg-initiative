import * as React from 'react';

import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon.js';
import ListItemText from '@material-ui/core/ListItemText/ListItemText.js';
import ListItem from '@material-ui/core/ListItem/ListItem.js';
import { Link } from 'react-router-dom';

class NavItem extends React.Component {
    render() {
        const { Icon, to, text, onClick } = this.props;

        return (
            <ListItem button component={Link} to={to} onClick={onClick}>
                <ListItemIcon>
                    <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        );
    }
}

export default NavItem;