import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import DeleteIcon from '@material-ui/icons/Delete';
import PersonIcon from '@material-ui/icons/Person';

import FlexCard from '../components/FlexCard.jsx';
import Typography from '@material-ui/core/Typography/Typography.js';

const styles = (theme) => ({
    recurring: {
        color: theme.palette.blue[500],
    },
    nonRecurring: {
        color: theme.palette.pink[500],
    },
    deleteIcon: {
        cursor: 'pointer',
    },
});

class CharacterCard extends Component {
    handleDelete = () => {
        const {
            onDelete,
            character: {
                id,
            },
        } = this.props;

        onDelete(id);
    };

    render() {
        const {
            classes,
            character: {
                name,
                initiative,
                dexterity,
            },
            isRecurring,
            onDelete,
        } = this.props;

        const iconClass = isRecurring ? classes.recurring : classes.nonRecurring;

        return (
            <FlexCard
                columns={[
                    <PersonIcon className={iconClass} />,
                    <Typography variant="p">{name}</Typography>,
                    <Typography variant="p">{initiative}</Typography>,
                    <Typography variant="p">{dexterity}</Typography>,
                    (onDelete &&
                        <DeleteIcon
                            className={
                                `${iconClass} ${classes.deleteIcon}`
                            }
                            onClick={this.handleDelete}
                        />
                    )
                ]}
            />
        );
    }
}

export default withStyles(styles)(CharacterCard);
