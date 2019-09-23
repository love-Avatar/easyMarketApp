import request from "@/utils/request"

// 获取分类页初始化信息
export let getNavList = () => {
    return request.get('/api/catalog/index')
}

// 获取分类ID分类Nav数据
export let getListById = (id: string) => {
    return request.get('/api/goods/category', { params: { id } })
}


// 根据分类ID获取当前分类信息和子分类
export let getCurrentListById = (id: string) => {
    return request.get('/api/catalog/current', { params: { id } })
}
