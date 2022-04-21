import Cookies from 'js-cookie';

export function getCookie(name: string) {
    const token = Cookies.get(name);

    return token;
}

export function removeCookie(name: string) {
    Cookies.remove(name);
}

export function setCookie(name: string, value: string | object) {
    Cookies.set(name, value);
}
