import React, { useEffect, useState } from 'react';
import './index.scss';
import ListItem from './ListItem';

const API_URL = 'https://cnodejs.org/api/v1/topics?limit=20';

const Main = props => {
    const [tab, setTab] = useState('all');  //标签
    const [page, setPage] = useState(1);  //页数
    const [data, setData] = useState(null);  //帖子数据

    //获取数据
    useEffect(() => {
        const fetchTopicData = async () => {
            const result = await fetch(`${API_URL}&page=${page}&tab=${tab}`).then(res => res.json());
            setData(result.data);
        }
        
        setData(null);
        fetchTopicData();
    },
        [tab, page]
    );

    //设置页数
    const handleSetPage = command => {
        if (command === 'next') {
            setPage(page + 1);
        } else if (page > 1) {
            setPage(page - 1);
        }
    }

    //切换标签
    const handleChangePage = tab => {
        setTab(tab);
        setPage(1);
    }

    return (
        <div className="main">
            <div className="tab">
                <span 
                    className={tab === 'all' ? 'item high-light' : 'item'}
                    onClick={() => handleChangePage('all')}>全部</span>
                <span
                    className={tab === 'good' ? 'item high-light' : 'item'}
                    onClick={() => handleChangePage('good')}>精华</span>
                <span
                    className={tab === 'share' ? 'item high-light' : 'item'}
                    onClick={() => handleChangePage('share')}>分享</span>
                <span
                    className={tab === 'ask' ? 'item high-light' : 'item'}
                    onClick={() => handleChangePage('ask')}>问答</span>
                <span
                    className={tab === 'job' ? 'item high-light' : 'item'}
                    onClick={() => handleChangePage('job')}>招聘</span>
            </div>
            <ListItem data={data} />
            {
                data &&
                <div className='page'>
                    <button onClick={() => handleSetPage('prev')}>{`<<Prev`}</button>
                    <button onClick={() => handleSetPage('next')}>{`Next>>`}</button>
                </div>
            }
        </div>
    );
}


export default Main;