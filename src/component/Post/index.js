import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { mapStateToProps_post, mapDispatchToState_post } from '../../redux/map';
import Loading from '../Loading';
import convert from '../../utils/convertTime';
import { Link } from 'react-router-dom';


class Post extends React.Component {
    componentDidMount = () => {
        this.props.refreshData();
        this.props.getPostDetail(this.props.match.params.id);
        //console.log(this.props);
    }
    render() {
        if (this.props.data.length === 0 || this.props.userData.length === 0) {
            return <Loading />;
        }
        console.log(this.props);
        return (
            <div className='post'>
                <div className='panel'>
                    <div className='panel-top'>
                        <div className='title'>{this.props.data.title}</div>
                        <div className='changes'>
                            <span>发布于{`${convert(this.props.data.create_at)}`}</span>
                            <span><Link to={`/user/${this.props.data.author.loginname}`}>作者{`${this.props.data.author.loginname}`}</Link></span>
                            <span>{`${this.props.data.visit_count}`}次浏览</span>
                        </div>
                        <div className='content' dangerouslySetInnerHTML={{ __html: this.props.data.content }}></div>
                    </div>
                    <div className='panel-bottom'>
                        <header className='reply-header'>{`${this.props.data.replies.length}`}回复</header>

                        {this.props.data.replies.map(e =>
                            <div className='reply'>
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
                                <Link to={`/user/${this.props.userData.loginname}`}>
                                    <img src={`${this.props.userData.avatar_url}`} alt={`${this.props.userData.loginname}`} />
                                    <span>{`${this.props.userData.loginname}`}</span>
                                </Link>
                            </div>
                            <div className='score'>{`积分：${this.props.userData.score}`}</div>
                            <div className='register-time'>{`注册时间：${convert(this.props.userData.create_at)}`}</div>
                        </div>

                        <div className='panel-bottom'>
                            <header>作者的其他话题</header>
                            <div className='list'>

                                {this.props.userData.recent_topics.map(e =>
                                    <div className='item'>
                                        <Link to={`/post/${e.id}`}>{`${e.title}`}</Link>
                                    </div>)}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps_post, mapDispatchToState_post)(Post);