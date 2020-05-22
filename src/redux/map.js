import { changeTab, getNextPage, getPrevPage, getPost, refreshData, getPostDetail, getUser } from './actions';

//mapStateToProps
export const mapStateToProps_main = (state, ownProps) => ({
    tab: state.tab,
    page: state.page,
    data: state.data
});

export const mapStateToProps_post = (state, ownProps) => ({
    data: state.data,
    userData: state.userData
});



//mapDispatchToState
export const mapDispatchToState_main = (dispatch) => {
    return {
        changeTab: (tab) => {
            dispatch(changeTab(tab));
        },
        getPost: (tab, page) => {
            dispatch(getPost(tab, page));
        },
        refreshData: () => {
            dispatch(refreshData());
        },
        getNextPage: () => {
            dispatch(getNextPage());
        },
        getPrevPage: () => {
            dispatch(getPrevPage());
        }
    }
}

export const mapDispatchToState_post = (dispatch) => {
    return {
        getPostDetail: (id) => {
            dispatch(getPostDetail(id));
        },
        refreshData: () => {
            dispatch(refreshData());
        },
        getUser: (name) => {
            dispatch(getUser(name))
        }
    };
}