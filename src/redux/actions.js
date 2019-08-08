const createAction = (type, action) => (options) => {
    const data = action(options);

    return {
        type,
        data,
    };
};

export const CHANGE_SETTING = 'CHANGE_SETTING';
export const USE_LOCAL_STORAGE = 'USE_LOCAL_STORAGE';

export default {
    changeSetting: createAction(CHANGE_SETTING, change => change),
    useLocalStorage: createAction(USE_LOCAL_STORAGE, ({ useLocalStorage }) => {
        console.log(useLocalStorage);
    }),
};