import * as Cookie from 'js-cookie';

const key = 'sessionKey';
export let getToken: () => any = () => {
    // return Cookie.get(key);
    const token = window.localStorage.getItem('token')
    console.log(token, 'defalult token from localstorage')
    if (token) {
        return window.localStorage.getItem('token')
    }
};

export let setToken: (val: string) => void = (val) => {
    Cookie.set(key, val, { expires: 7 });
};

export let removeToken: () => void = () => {
    Cookie.remove(key);
};