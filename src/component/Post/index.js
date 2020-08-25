import React, { useEffect, useState } from 'react';
import './index.scss';
import Loading from '../Loading';
import convert from '../../utils/convertTime';
import { Link } from 'react-router-dom';

const API_URL_TOPIC = 'https://cnodejs.org/api/v1/topic/';  //帖子API
const API_URL_USER = 'https://cnodejs.org/api/v1/user/'; //用户API

const Post = props => {
    const id = props.match.params.id;  //帖子id
    const [topicData, setTopicData] = useState(null);  //帖子数据
    const [userData, setUserData] = useState(null);  //用户数据

    //获取帖子数据
    useEffect(() => {
        const fetchTopicData = async () => {
            const topicResult = await fetch(`${API_URL_TOPIC}${id}`).then(res => res.json());
            setTopicData(topicResult.data);
        }

        setTopicData(null);
        fetchTopicData();
    },
        [id]
    );

    //获取用户数据
    useEffect(() => {
        const fetchUserData = async () => {
            if (topicData) {
                const userResult = await fetch(`${API_URL_USER}${topicData.author.loginname}`).then(res => res.json());
                setUserData(userResult.data);
            }
        }

        setUserData(null);
        fetchUserData();
    },
        [topicData]
    );

    //等待加载数据
    if (!topicData || !userData) {
        return <Loading />;
    }

    return (
        <div className='post'>
            <div className='panel'>
                <div className='panel-top'>
                    <div className='title'>{topicData.title}</div>
                    <div className='changes'>
                        <span>发布于{`${convert(topicData.create_at)}`}</span>
                        <span><Link to={`/user/${topicData.author.loginname}`}>作者{`${topicData.author.loginname}`}</Link></span>
                        <span>{`${topicData.visit_count}`}次浏览</span>
                    </div>
                    <div className='content' dangerouslySetInnerHTML={{ __html: topicData.content }}></div>
                </div>
                <div className='panel-bottom'>
                    <header className='reply-header'>{`${topicData.replies.length}`}回复</header>

                    {topicData.replies.map((e, index) =>
                        <div className='reply' key={index}>
                            <div className='reply-author'>
                                <Link to={`/user/${e.author.loginname}`}><img src={e.author.avatar_url} alt={`${e.author.loginname}`} /></Link>
                                <Link to={`/user/${e.author.loginname}`}>{`${e.author.loginname}`}</Link>
                                <span>{` 回复于${convert(e.create_at)}`}</span>
                            </div>
                            <div className='reply-content' dangerouslySetInnerHTML={{ __html: e.content }}></div>
                        </div>)}

                </div>
            </div>
            <div className='sidebar'>
                <div className='panel'>
                    <div className='panel-top'>
                        <header>作者</header>
                        <div className='info'>
                            <Link to={`/user/${userData.loginname}`}>
                                <img src={`${userData.avatar_url}`} alt={`${userData.loginname}`} />
                                <span>{`${userData.loginname}`}</span>
                            </Link>
                        </div>
                        <div className='score'>{`积分：${userData.score}`}</div>
                        <div className='register-time'>{`注册时间：${convert(userData.create_at)}`}</div>
                    </div>

                    <div className='panel-bottom'>
                        <header>作者的其他话题</header>
                        <div className='list'>
                            {
                                userData.recent_topics.map((e, index) =>
                                    <div className='item' key={index}>
                                        <Link to={`/post/${e.id}`}>{`${e.title}`}</Link>
                                    </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;