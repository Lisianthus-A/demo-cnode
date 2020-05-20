//切换标签
export const changeTab = (tab) => ({
    type: 'CHANGE_TAB',
    tab
});

//获取文章
export const getPost = (id) => ({
    type: 'GET_POST',
    id
});

//获取用户信息
export const getUser = (userid) => ({
    type: 'GET_USER',
    userid
});

//下一页
export const getNextPage = () => ({
    type: 'GET_NEXT_PAGE'
});

//上一页
export const getPrevPage = () => ({
    type: 'GET_PREV_PAGE'
});