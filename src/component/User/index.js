import React, { useState, useEffect } from 'react';
import './index.scss';
import Loading from '../Loading';
import convert from '../../utils/convertTime';
import { Link } from 'react-router-dom';

const API_URL = 'https://cnodejs.org/api/v1/user/';

const User = props => {
    const [data, setData] = useState(null);  //用户数据
    const userName = props.match.params.name;  //路由匹配到的用户名

    //获取数据
    useEffect(() => {
        const fetchUserData = async () => {
            const result = await fetch(`${API_URL}${userName}`).then(res => res.json());
            setData(result.data);
        }
        setData(null);
        fetchUserData();
    },
        [userName]
    );

    //等待加载数据
    if (!data) {
        return <Loading />;
    }

    return (
        <div className='user'>
            <div className='panel'>
                <div className='panel-top'>
                    <header>个人信息</header>
                    <div className='info'>
                        <img src={`${data.avatar_url}`} title={`${data.loginname}`} alt="" />
                        <span>{`${data.loginname}`}</span>
                    </div>
                    <div className='score'>{`积分：${data.score}`}</div>
                    <div className='github'>GitHub:<a href={`https://github.com/${data.githubUsername}`}>{data.githubUsername}</a></div>
                    <div className='register-time'>注册时间：{convert(data.create_at)}</div>
                </div>
                <div className='panel-middle'>
                    <header>最近创建的话题</header>
                    <div className='list'>
                        {data.recent_replies.map((e, index) =>
                            <div className='item' key={index}>
                                <Link to={`/post/${e.id}`}>{e.title}</Link>
                            </div>)}
                    </div>
                </div>
                <div className='panel-bottom'>
                    <header>最近参与的话题</header>
                    <div className='list'>
                        {data.recent_topics.map((e, index) =>
                            <div className='item' key={index}>
                                <Link to={`/post/${e.id}`}>{e.title}</Link>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;