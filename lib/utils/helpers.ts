/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */

export const passwordMatch = (password1: string, password2: string) => {
    if (password1 !== password2) {
        return 'Password does not match';
    }
};

export const validateEmail = (email: string) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const getMobile = (number: string) => {
    const isNumber = number?.match?.(/\d+/gi);
    return isNumber ?? '';
};

export function setSessionStorageValue(hostname: string, newState: any) {
    sessionStorage.setItem(hostname, JSON.stringify(newState));
}

export function setLocalStorageValue(hostname: string, newState: any) {
    localStorage.setItem(hostname, JSON.stringify(newState));
}

export function removeLocalStorageValue(hostname: string) {
    localStorage.removeItem(hostname);
}

export function windowCheck(value: any) {
    if (typeof window !== 'undefined') {
        return null;
    }
    return value;
}

export function getValidationErrors(err: any) {
    const validationErrors = {};

    err.inner.forEach((error: any) => {
        if (error.path) {
            /* @ts-ignore */
            validationErrors[error.path] = error.message;
        }
    });

    return validationErrors;
}

export const ROOT_DATA_KEY = '__r';
