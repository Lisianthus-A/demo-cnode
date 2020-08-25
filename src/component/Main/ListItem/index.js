import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import Loading from '../../Loading';
import convert from '../../../utils/convertTime';

const ListItem = props => {
    //每个帖子显示的标签内容
    const getTabText = item => {
        if (item.top) {
            return '置顶';
        }
        if (item.good) {
            return '精华';
        }
        switch (item.tab) {
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

    //等待数据加载
    if (!props.data) {
        return <Loading />;
    }

    return (
        <div className='list-item'>
            <div className='list'>
                {props.data.map(e =>
                    <div className='cell' key={e.id}>
                        <Link to={`/user/${e.author.loginname}`}>
                            <img className='user-avatar' src={e.author.avatar_url} title={e.author.loginname} alt='' />
                        </Link>
                        <div className='cell-left'>
                            <span className='reply-count'>{e.reply_count}</span>
                            <span>/</span>
                            <span className='visit-count'>{e.visit_count}</span>
                        </div>
                        <span className={e.top || e.good ? 'put-top' : 'list-tab'}>{getTabText(e)}</span>
                        <span className='title'><Link to={`/post/${e.id}`}>{e.title}</Link></span>
                        <span className='time'>{convert(e.last_reply_at)}</span>
                    </div>)}
            </div>
        </div>
    );
}

export default ListItem;