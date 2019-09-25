import request from "@/utils/request"


// 获取用户地址数据
// 返回示例 typeId为1时
export let getUserAddress = () => {
    return request.get('/api/address/list', {})
}


// 新增地址
interface AddressInfo {
    id: string
}
export let postAddAddress = (opt: AddressInfo) => {
    return request.post('/api/address/save', opt)
}



// 获取删除地址数据
interface deleteAddressInfo {
    id: string
}
export let deleteAddress = (opt: deleteAddressInfo) => {
    return request.post('/api/address/save', opt)
}
