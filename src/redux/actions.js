const createAction = (type, action) => (options) => {
    const data = action(options);

    return {
        type,
        data,
    };
};

export const RESET_APPLICATION = 'RESET_APPLICATION';
export const CHANGE_SETTING = 'CHANGE_SETTING';
export const CREATE_RECURRING_CHARACTER = 'CREATE_RECURRING_CHARACTER';
export const DELETE_RECURRING_CHARACTER= 'DELETE_RECURRING_CHARACTER';
export const CREATE_NON_RECURRING_CHARACTER = 'CREATE_NON_RECURRING_CHARACTER';
export const DELETE_NON_RECURRING_CHARACTER= 'DELETE_NON_RECURRING_CHARACTER';

export default {
    resetApplication: createAction(RESET_APPLICATION, () => {
    }),
    changeSetting: createAction(CHANGE_SETTING, ({ name, value }) => {
        return { name, value };
    }),
    createRecurringCharacter: createAction(CREATE_RECURRING_CHARACTER, (character) => {
        return character;
    }),
    deleteRecurringCharacter: createAction(DELETE_RECURRING_CHARACTER, (characterId) => {
        return characterId;
    }),
    createNonRecurringCharacter: createAction(CREATE_NON_RECURRING_CHARACTER, (character) => {
        return character;
    }),
    deleteNonRecurringCharacter: createAction(DELETE_NON_RECURRING_CHARACTER, (characterId) => {
        return characterId;
    }),
};