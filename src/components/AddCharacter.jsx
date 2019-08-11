import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import TextField from '@material-ui/core/TextField/TextField.js';

import FlexCard from '../components/FlexCard.jsx';
import Button from '@material-ui/core/Button/Button.js';

const styles = (theme) => ({
});

class AddCharacter extends Component {
    state = {
    };

    onChange = (e) => {
        const {
            target: {
                name,
                value,
            },
        } = e;

        this.setState({
            [name]: value,
        });
    };

    isValid = () => {
        const {
            name,
            initiative,
            dexterity,
        } = this.state;

        if (!name) return false;

        if (!initiative && initiative !== 0) return false;

        if (!dexterity && dexterity !== 0) return false;

        return true;
    };

    handleSave = () => {
        const { onSave } = this.props;
        const {
            name,
            initiative,
            dexterity,
        } = this.state;

        onSave({ name, initiative, dexterity });
        this.setState({
            name: null,
            initiative: null,
            dexterity: null,
        });
    };

    render() {
        const {
            classes,
            color,
        } = this.props;
        const {
            name,
            initiative,
            dexterity,
        } = this.state;

        return (
            <FlexCard
                columns={[(
                    <TextField
                        classes={{ root: classes.input }}
                        name="name"
                        value={name}
                        label="Name"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.onChange}
                        autoFocus
                    />
                ), (
                    <TextField
                        classes={{ root: classes.input }}
                        name="initiative"
                        value={initiative}
                        label="Speed"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.onChange}
                    />
                ), (
                    <TextField
                        classes={{ root: classes.input }}
                        name="dexterity"
                        value={dexterity}
                        label="DX"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.onChange}
                    />
                ), (
                    <Button
                        color={color}
                        variant="contained"
                        onClick={this.handleSave}
                        disabled={!this.isValid()}
                    >
                        Save
                    </Button>
                )]}
            />
        );
    }
}

export default withStyles(styles)(AddCharacter);
