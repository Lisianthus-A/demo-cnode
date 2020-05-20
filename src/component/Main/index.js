import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import * as testImg from '../../asset/images/testImg.jpg';
import Loading from '../Loading';

class Main extends React.Component {

    componentDidMount = () => {
        console.log(this.props);
    }

    render() {
        return (
            <div className="main">
                <div className="tab">
                    <Link to='/' className="item high-light">全部</Link>
                    <Link to='/' className="item">精华</Link>
                    <Link to='/' className="item">分享</Link>
                    <Link to='/' className="item">问答</Link>
                    <Link to='/' className="item">招聘</Link>
                </div>
                <div className='list'>
                    <div className='cell'>
                        <img className='user-avatar' src={testImg} alt='testImg' />
                        <span className='reply-count'>123</span>
                        <span>/</span>
                        <span className='visit-count'>10000</span>
                        <span className='put-top'>置顶</span>
                        <span className="title"><Link to='/' >Node.js 开发者调查问卷 [报告已出炉]sssssssssssss</Link></span>
                        <span className='time'>3天前</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;