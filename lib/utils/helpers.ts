/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { NO_HOSTNAME, parseDomain } from 'parse-domain';

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

export const formatSignupErrorMessage = (errors: {
    errors: { username: { message: string }[]; password2: { message: any }[] };
}) => {
    if (typeof errors === 'string') {
        return errors;
    }
    if (Object.prototype.hasOwnProperty.call(errors, 'errors')) {
        if (errors?.errors?.username && Array.isArray(errors?.errors?.username)) {
            return errors?.errors?.username[0]?.message ===
                'A user with that username already exists.'
                ? 'A user with that email already exists.'
                : 'Some error occurred';
        }
        if (errors?.errors?.password2 && Array.isArray(errors?.errors?.password2)) {
            return errors?.errors?.password2[0]?.message;
        }
    } else {
        return 'Some error occurred';
    }
};

export const formatErrorMessage = (errors: {
    hasOwnProperty: (arg0: string) => any;
    errors: { message: any }[];
}) => {
    if (typeof errors === 'string') {
        return errors;
    }

    if (Object.prototype.hasOwnProperty.call(errors, 'errors')) {
        if (errors.errors && Array.isArray(errors.errors)) {
            return errors.errors[0]?.message;
        }

        if (typeof errors.errors === 'object') {
            const objectKeys = Object.keys(errors.errors);
            return errors.errors[objectKeys[0]] && typeof errors.errors[objectKeys[0]] === 'object'
                ? errors.errors[objectKeys[0]][0]
                : 'Some errors occurred';
        }
    } else {
        return 'Some error occurred';
    }
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

export function extractHostname(hostname: string | typeof NO_HOSTNAME) {
    // This should be a string with basic latin characters only.
    // More information below.
    const parseResult = parseDomain(hostname);
    /* @ts-ignore */
    // why am i getting this TS error ?
    const { domain, topLevelDomains } = parseResult;
    if (domain) return `${domain}.${topLevelDomains.join('.')}`;
    return undefined;
}

export function windowCheck(value: any) {
    if (typeof window !== 'undefined') {
        return null;
    }
    return value;
}

export function domainNameBasedOnEnv(url: string) {
    const fullHostName =
        typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';
    const devEnvHostname = process.env.NEXT_PUBLIC_DEV_HOSTNAME;
    let hostname = devEnvHostname === 'null' ? extractHostname(fullHostName) : devEnvHostname;

    if (typeof hostname === 'undefined') {
        hostname = extractHostname(url);
    }

    return hostname;
}

export const imageNullChecker = (localImage: { src: string }, dynamicImage: string) => {
    const imageUrl = `${process.env.NEXT_PUBLIC_PHOTO_URL}/${dynamicImage}`;
    const imageUrlLast = (imageUrl || 'hello/undefined').split('/').at(-1);
    if (imageUrlLast === 'undefined' || imageUrlLast === 'null') {
        return localImage.src;
    }
    return imageUrl;
};
