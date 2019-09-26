import request from "@utils/request"


// 获取专题数据
interface topicListInfo {
    page?: string,
    size?: string
}
export let getTopicList = (opt?: topicListInfo) => {
    return request.get('/api/topic/list', { params: { ...opt } })
}

// 根据专题Id获取专题详情
export let getTopicDetail = (id: string) => {
    return request.get('/api/topic/detail', { params: { id } })
}

// 根据专题ID或者商品ID获取评论获取相关专题
interface TopicComentInfo {
    valueId: string,
    typeId: string,
    page?: string,
    size?: string
}
export let getTopicComent = (opt: TopicComentInfo) => {
    return request.get('/api/comment/list', { params: { ...opt } })
}

// 根据专题Id获取相关专题
export let getTopicRelated = (id: string) => {
    return request.get('/api/topic/related', { params: { id } })
}

