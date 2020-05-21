//切换标签
export const changeTab = (tab) => ({
    type: 'CHANGE_TAB',
    tab
});

//获取文章
export const getPost = (tab = 'all', page = 1) => {
    return async function (dispatch) {
        let url = 'https://cnodejs.org/api/v1/topics?limit=20';
        if (page !== 1) {
            url += `&page=${page}`
        }
        if (tab !== 'all') {
            url += `&tab=${tab}`
        }
        return fetch(url)
            .then(res => res.json())
            .then(res => dispatch({ type: 'GET_POST', data: res.data }))
            .catch(() => alert('数据加载失败'));
    }
};

//获取用户信息
export const getUser = async (userid) => ({
    type: 'GET_USER',
    userid
});

//重置数据
export const refreshData = () => ({
    type: 'REFRESH_DATA'
});

//下一页
export const getNextPage = () => ({
    type: 'GET_NEXT_PAGE'
});

//上一页
export const getPrevPage = () => ({
    type: 'GET_PREV_PAGE'
});