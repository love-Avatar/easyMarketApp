import request from "@utils/request"

interface LoginInfo {
    mobile: string,
    password: string
}
export let login = (opt: LoginInfo) => {
    return request.post('/api/auth/loginByMobile', opt)
}
