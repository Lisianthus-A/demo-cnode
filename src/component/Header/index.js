import React from 'react';
import logo from '../../asset/images/cnode.svg';
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
                    <Link to='/'>
                        <img src={logo} alt='logo' />
                    </Link>
                </div>
                <div className="navbar">
                    <Link to='/'>首页</Link>
                    <a href='https://cnodejs.org/getstart' target='_blank' rel="noopener noreferrer" >新手入门</a>
                    <a href='https://cnodejs.org/api' target='_black' rel="noopener noreferrer">API</a>
                    <a href='/' onClick={this.handleAbout}>关于</a>
                </div>
            </div>
        );
    }
}

export default Header;