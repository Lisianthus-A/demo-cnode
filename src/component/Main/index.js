import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps_main, mapDispatchToState_main } from '../../redux/map';
import ListItem from './ListItem';

class Main extends React.Component {

    componentDidMount = () => {
        this.props.refreshData();
        this.props.getPost();
    }

    //切换标签
    handleChangeTab = (tab) => {
        if (this.props.tab !== tab) {
            this.props.changeTab(tab);
            this.props.refreshData();
            this.props.getPost(tab, this.props.page);
        }
    }

    //下一页
    handleNextPage = () => {
        setTimeout(() => {
            this.props.getNextPage();
            this.props.refreshData();
            this.props.getPost(this.props.tab, this.props.page);
        }, 0);
    }

    //上一页
    handlePrevPage = () => {
        if (this.props.page !== 1) {
            setTimeout(() => {
                this.props.getPrevPage();
                this.props.refreshData();
                this.props.getPost(this.props.tab, this.props.page);
            }, 0);
        }
    }

    render() {
        return (
            <div className="main">
                <div className="tab">
                    <Link
                        className={`item${this.props.tab === 'all' ? ' high-light' : ''}`}
                        onClick={() => this.handleChangeTab('all')}>全部</Link>
                    <Link
                        className={`item${this.props.tab === 'good' ? ' high-light' : ''}`}
                        onClick={() => this.handleChangeTab('good')}>精华</Link>
                    <Link
                        className={`item${this.props.tab === 'share' ? ' high-light' : ''}`}
                        onClick={() => this.handleChangeTab('share')}>分享</Link>
                    <Link
                        className={`item${this.props.tab === 'ask' ? ' high-light' : ''}`}
                        onClick={() => this.handleChangeTab('ask')}>问答</Link>
                    <Link
                        className={`item${this.props.tab === 'job' ? ' high-light' : ''}`}
                        onClick={() => this.handleChangeTab('job')}>招聘</Link>
                </div>
                {Array.isArray(this.props.data) ? <ListItem data={this.props.data} /> : null}
                {this.props.data.length !== 0 ?
                    <div className='page'>
                        <button onClick={() => this.handlePrevPage()}>{`<<Prev`}</button>
                        <button onClick={() => this.handleNextPage()}>{`Next>>`}</button>
                    </div> : null}
            </div>
        );
    }
}

export default connect(mapStateToProps_main, mapDispatchToState_main)(Main);