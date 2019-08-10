import storageCreator from '../utility/localStorage.js';

const LOCAL_STORAGE_KEY = 'rpgHelperData';
const storage = storageCreator(LOCAL_STORAGE_KEY);

const createAction = (type, action) => (options) => {
    const data = action(options);

    return {
        type,
        data,
    };
};

export const CHANGE_SETTING = 'CHANGE_SETTING';

export default {
    changeSetting: createAction(CHANGE_SETTING, ({ name, value }) => {
        return { name, value };
    }),
};