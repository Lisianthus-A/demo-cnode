import React from 'react';
import logo from '../../cnode.svg';
import './index.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    handleAbout = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className='header'>
                <div className='logo'>
                    <a href='/'>
                        <img src={logo} alt='logo' />
                    </a>
                </div>
                <div className="navbar">
                    <Link to='/'>首页</Link>
                    <a href='https://cnodejs.org/getstart' target='_blank'>新手入门</a>
                    <a href='https://cnodejs.org/api' target='_black'>API</a>
                    <a href='/' onClick={this.handleAbout}>关于</a>
                </div>
            </div>
        );
    }
}

export default Header;