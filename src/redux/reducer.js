const initialState = {
    tab: 'all',
    page: 1,
    data: [],
    userData: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TAB':  //切换标签
            return Object.assign({}, state, {
                tab: action.tab
            })
        case 'GET_POST':  //获取文章
            return Object.assign({}, state, {
                data: action.data
            });
        case 'GET_USER':  //获取用户信息
            return Object.assign({}, state, {
                userData: action.data
            });
        case 'REFRESH_DATA':  //重置数据
            return Object.assign({}, state, {
                data: [],
                userData: []
            });
        case 'GET_NEXT_PAGE':  //下一页
            return Object.assign({}, state, {
                page: state.page + 1
            });
        case 'GET_PREV_PAGE':  //上一页
            return Object.assign({}, state, {
                page: state.page - 1
            });
        case 'GET_POST_DETAIL': //获取文章详情
            return Object.assign({}, state, {
                data: action.data,
                userData: action.userData
            });
        default:
            return state;
    }
}

export default reducer;