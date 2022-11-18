import React from 'react';

//assets Imports
import logo from '../../assets/images/Frame 34483logo.svg';
import add from '../../assets/images/addadd icon.svg';
import homeIcon from '../../assets/images/home-2homeicon.svg';
import notificationIcon from '../../assets/images/notificationnotification .svg';
import assistantIcon from '../../assets/images/messageassistant.svg';

import './Sidebar.css';

const SideBar = () => {
    //This is an array of Objects to house each Navigation Link

    const Links = [
        {
            name: 'Home',
            icon: homeIcon,
        },
        {
            name: 'Notifications',
            icon: notificationIcon,
        },
        {
            name: 'Assistant',
            icon: assistantIcon,
        },
    ];
    return (
        <div className='sidebar__container'>
            <div className='logo__container'>
                <img className='logo' src={logo} alt='logo' />
            </div>
            <div className='todo__button'>
                <div className='button todo__button'>
                    <img src={add} alt='add' />
                    <span>New to do</span>
                </div>
            </div>
            <div className='sidebar__links'>
                {/* Mapping Over each Link*/}
                {Links.map((link) => (
                    <div className='side__link' key={link.name}>
                        <a href='#'>
                            {' '}
                            <img src={link.icon} alt={link.name} />
                            <span>{link.name}</span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideBar;
