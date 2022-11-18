import React from 'react';
import { motion } from 'framer-motion';

//assets Imports
import logo from '../../assets/images/Frame 34483logo.svg';
import add from '../../assets/images/addadd icon.svg';
import homeIcon from '../../assets/images/home-2homeicon.svg';
import notificationIcon from '../../assets/images/notificationnotification .svg';
import assistantIcon from '../../assets/images/messageassistant.svg';

import './Sidebar.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeSideBar } from '../../features/sideBar/sideBarSlice';

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
const SideBar = () => {
    const sideBar = useSelector(({ sideBar }) => sideBar.open);
    const dispatch = useDispatch();
    const handleBar = () => {
        dispatch(closeSideBar());
    };
    return (
        <div className={`sidebar__container ${sideBar ? 'openBar' : ''}`}>
            <div className='logo__container'>
                <img className='logo' src={logo} alt='logo' />
            </div>
            <div className='todo__button'>
                <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.9 }}
                    className='button todo__button'>
                    <img src={add} alt='add' />
                    <span>New to do</span>
                </motion.div>
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
            <div className='closeMenu' onClick={handleBar}>
                <span className='material-symbols-outlined'>close</span>
            </div>
        </div>
    );
};

export default SideBar;
