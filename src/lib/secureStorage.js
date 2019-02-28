export const  setItem = (name, value) => {
    sessionStorage.setItem(name, value);
}

export const getItem = (name) => {
    const value = sessionStorage.getItem(name);
    return value;
}

export const  removeItem = (name) => {
    sessionStorage.removeItem(name);
}

export const clear = () => {
    sessionStorage.clear();
}
