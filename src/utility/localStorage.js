
export default (key) => ({
    load: () => {
        let data = null;

        try {
            data = localStorage.getItem(key);
            data = JSON.parse(data);
        } catch (e) {
            data = null;
            console.error('Failed to load from localStorage');
        }

        return data;
    },

    save: (data) => {
        localStorage.setItem(key, JSON.stringify(data));
    },

    reset: () => {
        localStorage.removeItem(key);
        localStorage.clear();
    },
});