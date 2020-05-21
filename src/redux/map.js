import { changeTab, getNextPage, getPrevPage, getPost, refreshData } from './actions';

export const mapStateToProps_main = (state, ownProps) => ({
    tab: state.tab,
    page: state.page,
    data: state.data
});

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