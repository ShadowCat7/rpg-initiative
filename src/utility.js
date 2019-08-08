const LOCAL_STORAGE_KEY = 'rpgHelperData';

export const loadFromLocalStorage = () => {
    localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

export const saveToLocalStorage = (data) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

export const resetLocalStorage = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    localStorage.clear();
};
