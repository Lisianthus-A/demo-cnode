import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import Loading from '../../Loading';
import convert from '../../../utils/convertTime';

class ListItem extends React.Component {
    getText = (obj) => {
        if (obj.top) {
            return '置顶';
        }
        if (obj.good) {
            return '精华';
        }
        switch (obj.tab) {
            case 'ask':
                return '问答';
            case 'share':
                return '分享';
            case 'job':
                return '招聘';
            default:
                return '';
        }
    }

    render() {
        console.log(this.props);
        //等待数据加载
        if (this.props.data.length === 0) {
            return (
                <Loading />
            );
        }

        return (
            <div className='list-item'>
                <div className='list'>
                    {this.props.data.map(e =>
                        <div className='cell' key={e.id}>
                            <Link to={`/user/${e.author.loginname}`}>
                                <img className='user-avatar' src={e.author.avatar_url} title={e.author.loginname} alt={e.author.loginname} />
                            </Link>
                            <div className='cell-left'>
                                <span className='reply-count'>{e.reply_count}</span>
                                <span>/</span>
                                <span className='visit-count'>{e.visit_count}</span>
                            </div>
                            <span className={e.top || e.good ? 'put-top' : 'list-tab'}>{this.getText(e)}</span>
                            <span className='title'><Link to={`/post/${e.id}`}>{e.title}</Link></span>
                            <span className='time'>{convert(e.last_reply_at)}</span>
                        </div>)}
                </div>
            </div>
        );
    }
}

export default ListItem;