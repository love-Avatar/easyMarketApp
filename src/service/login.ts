import request from "@/utils/request"

interface LoginInfo {
    mobile: string,
    password: string
}
export let login = (opt: LoginInfo) => {
    return request.post('/api/auth/loginByMobile', opt)
}



// export let getQuestion = (params: object)=>{
//     return request.get('/exam/questions/condition', {params});
// }

// export let login = (params: object)=>{
//     return request.post('/user/login', params);
// }
