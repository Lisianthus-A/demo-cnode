import React from 'react';
import './index.scss';
import { mapDispatchToState_user, mapStateToProps_user } from '../../redux/map';
import { connect } from 'react-redux';
import Loading from '../Loading';
import convert from '../../utils/convertTime';
import { Link } from 'react-router-dom';

class User extends React.Component {
    componentDidMount() {
        //console.log(this.props)
        this.props.refreshData();
        this.props.getUser(this.props.match.params.name);
    }
    render() {
        if (this.props.userData.length === 0) {
            return <Loading />;
        }
        console.log(this.props.userData);
        return (
            <div className='user'>
                <div className='panel'>
                    <div className='panel-top'>
                        <header>个人信息</header>
                        <div className='info'>
                            <img src={`${this.props.userData.avatar_url}`} title={`${this.props.userData.loginname}`} />
                            <span>{`${this.props.userData.loginname}`}</span>
                        </div>
                        <div className='score'>{`积分：${this.props.userData.score}`}</div>
                        <div className='github'>GitHub:<a href={`https://github.com/${this.props.userData.githubUsername}`}>{this.props.userData.githubUsername}</a></div>
                        <div className='register-time'>注册时间：{convert(this.props.userData.create_at)}</div>
                    </div>
                    <div className='panel-middle'>
                        <header>最近创建的话题</header>
                        <div className='list'>
                            {this.props.userData.recent_replies.map(e =>
                                <div className='item'>
                                    <Link to={`/post/${e.id}`}>{e.title}</Link>
                                </div>)}
                        </div>
                    </div>
                    <div className='panel-bottom'>
                        <header>最近参与的话题</header>
                        <div className='list'>
                            {this.props.userData.recent_topics.map(e =>
                                <div className='item'>
                                    <Link to={`/post/${e.id}`}>{e.title}</Link>
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps_user, mapDispatchToState_user)(User);