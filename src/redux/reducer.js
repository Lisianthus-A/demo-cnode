const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_TAB':  //切换标签
            return {};
        case 'GET_POST':  //获取文章
            return {};
        case 'GET_USER':  //获取用户信息
            return {};
        case 'GET_NEXT_PAGE':  //下一页
            return {};
        case 'GET_PREV_PAGE':  //上一页
            return {};
        default:
            return state;
    }
}

export default reducer;