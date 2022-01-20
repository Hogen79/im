import {post, get, upload, del} from '@/utils/request'

// 获取聊天列表服务接口
export const ServeGetTalkList = data => {
    return get('/lili/imTalk/list', data)
}

// 聊天列表创建服务接口
export const ServeCreateTalkList = (uid) => {
    return get(`/lili/imTalk/user/${uid}`)
}

// 删除聊天列表服务接口
export const ServeDeleteTalkList = data => {
    return del('/lili/imTalk', data)
}

// 对话列表置顶服务接口
export const ServeTopTalkList = data => {
    return post('/lili/imTalk/top', data)
}

// 清除聊天消息未读数服务接口
export const ServeClearTalkUnreadNum = data => {
    return post('/lili/imTalk/update-unread-num', data)
}

// 获取聊天记录服务接口
export const ServeTalkRecords = data => {
    return get('/lili/imTalk/records', data)
}

// 获取转发会话记录详情列表服务接口
export const ServeGetForwardRecords = data => {
    return get('/lili/imTalk/get-forward-records', data)
}

// 对话列表置顶服务接口
export const ServeSetNotDisturb = data => {
    return post('/lili/imTalk/disturb', data)
}

// 查找用户聊天记录服务接口
export const ServeFindTalkRecords = data => {
    return get('/lili/imTalk/find-chat-records', data)
}

// 搜索用户聊天记录服务接口
export const ServeSearchTalkRecords = data => {
    return get('/lili/imTalk/search-chat-records', data)
}

export const ServeGetRecordsContext = data => {
    return get('/lili/imTalk/get-records-context', data)
}

// 发送代码块消息服务接口
export const ServeSendTalkCodeBlock = data => {
    return post('/lili/imTalk/message/code', data)
}

// 发送聊天文件服务接口
export const ServeSendTalkFile = data => {
    return post('/lili/imTalk/message/file', data)
}

// 发送聊天图片服务接口
export const ServeSendTalkImage = data => {
    return upload('/lili/imTalk/message/image', data)
}

// 发送表情包服务接口
export const ServeSendEmoticon = data => {
    return post('/lili/imTalk/message/emoticon', data)
}

// 转发消息服务接口
export const ServeForwardRecords = data => {
    return post('/lili/imTalk/message/forward', data)
}

// 撤回消息服务接口
export const ServeRevokeRecords = data => {
    return post('/lili/imTalk/message/revoke', data)
}

// 删除消息服务接口
export const ServeRemoveRecords = data => {
    return post('/lili/imTalk/message/delete', data)
}

// 收藏表情包服务接口
export const ServeCollectEmoticon = data => {
    return post('/lili/imTalk/message/collect', data)
}

//投票
export const ServeSendVote = data => {
    return post('/lili/imTalk/message/vote', data)
}

export const ServeConfirmVoteHandle = data => {
    return post('/lili/imTalk/message/vote/handle', data)
}
