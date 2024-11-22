class LocalStorageManager {

    static categories = [];

    static updateLocalStorage() {
        const categoriesAsString = JSON.stringify(LocalStorageManager.categories);
        localStorage.setItem('active-categories', categoriesAsString);
    }

    static updateCategories() {
        const localStorageCategories = localStorage.getItem('active-categories');
        const localStorageAsArray = JSON.parse(localStorageCategories);
        LocalStorageManager.categories = localStorageAsArray ?? [];
    }

    static getCategories() {
        LocalStorageManager.updateCategories();
        return LocalStorageManager.categories;
    }

    static addCategoryToLocalStorage(category) {

        if (!LocalStorageManager.categories.includes(category)) {
            LocalStorageManager.categories.push(category);
        }
        LocalStorageManager.updateLocalStorage();
    }

    static removeCategoryFromLocalStorage(category) {

        LocalStorageManager.updateCategories();
        const index = LocalStorageManager.categories.indexOf(category);
        LocalStorageManager.categories.splice(index, 1);
        LocalStorageManager.updateLocalStorage();
    }

    static addAllCategories() {

        // LocalStorageManager.categories.push('foreign');
        // LocalStorageManager.categories.push('health');
        // LocalStorageManager.categories.push('sport');
        // LocalStorageManager.categories.push('business');
        // LocalStorageManager.categories.push('travel');
        LocalStorageManager.addCategoryToLocalStorage('foreign');
        LocalStorageManager.addCategoryToLocalStorage('health');
        LocalStorageManager.addCategoryToLocalStorage('sport');
        LocalStorageManager.addCategoryToLocalStorage('business');
        LocalStorageManager.addCategoryToLocalStorage('travel');
        //LocalStorageManager.updateLocalStorage();
    }
}

module.exports = LocalStorageManager;