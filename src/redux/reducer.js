import {
    RESET_APPLICATION,
    CHANGE_SETTING,
    CREATE_RECURRING_CHARACTER,
    DELETE_RECURRING_CHARACTER, CREATE_NON_RECURRING_CHARACTER, DELETE_NON_RECURRING_CHARACTER,
} from './actions.js';

import storageCreator from '../utility/localStorage.js';

export const LOCAL_STORAGE_KEY = 'rpgHelperData';
const storage = storageCreator(LOCAL_STORAGE_KEY);

const generateUniqueId = (() => {
    const generateIdFunc = Symbol || (()=>{});

    return () => {
        return generateIdFunc();
    };
})();

const defaultState = {
    settings: {
        darkMode: false,
    },
    recurringCharacters: [],
    nonRecurringCharacters: [],
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case RESET_APPLICATION:
            return defaultState;
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
        case CREATE_RECURRING_CHARACTER:
            return {
                ...state,
                recurringCharacters: [
                    ...state.recurringCharacters,
                    {
                        ...action.data,
                        id: generateUniqueId(),
                    },
                ],
            };
        case DELETE_RECURRING_CHARACTER:
            return {
                ...state,
                recurringCharacters: state.recurringCharacters.filter(character => character.id !== action.data),
            };
        case CREATE_NON_RECURRING_CHARACTER:
            return {
                ...state,
                nonRecurringCharacters: [
                    ...state.nonRecurringCharacters,
                    {
                        ...action.data,
                        id: generateUniqueId(),
                    },
                ],
            };
        case DELETE_NON_RECURRING_CHARACTER:
            return {
                ...state,
                nonRecurringCharacters: state.nonRecurringCharacters.filter(character => character.id !== action.data),
            };
        default:
            return state;
    }
};

export default (storedData) => {
    let loadedDefault = defaultState;

    if (storedData) {
        loadedDefault = {
            ...defaultState,
            ...storedData,
        };

        if (loadedDefault.recurringCharacters.length) {
            loadedDefault.recurringCharacters.forEach((character) => {
                character.id = generateUniqueId();
            });
        }

        if (loadedDefault.nonRecurringCharacters.length) {
            loadedDefault.nonRecurringCharacters.forEach((character) => {
                character.id = generateUniqueId();
            });
        }
    }

    return (state = loadedDefault, action) => {
        const newState = reducer(state, action);

        storage.save({
            settings: { ...newState.settings },
            recurringCharacters: [ ...newState.recurringCharacters ],
            nonRecurringCharacters: [ ...newState.nonRecurringCharacters ],
        });

        return newState;
    };
};
