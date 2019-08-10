import { CHANGE_SETTING } from './actions.js';

const defaultState = {
    settings: {
        darkMode: false,
        useLocalStorage: true,
    },
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_SETTING:
            if (state.settings[action.data.name] === undefined) {
                return state;
            }

            return {
                ...state,
                settings: {
                    ...state.settings,
                    [action.data.name]: action.data.value,
                },
            };
        default:
            return state;
    }
}