import React from 'react';
import PropTypes from 'prop-types';

//assets Imports
import icon from '../../assets/images/Vectorchevron.svg';
import avatar from '../../assets/images/Ellipse 125avatar.svg';

//array to hold user Information, Replace this with Api Data

const userInfo = [
    {
        name: 'Joseph A.',
        avatar: avatar,
    },
];

const Header = ({ section }) => {
    return (
        <header className='header'>
            <nav className='nav'>
                <div className='nav__content'>
                    <div className='section__name'>
                        <h3>{section}</h3>
                    </div>
                    <div className='profile__section'>
                        {userInfo.map((user) => (
                            <>
                                <img src={user.avatar} alt='avatar' />
                                <span>{user.name}</span>
                            </>
                        ))}
                        <img src={icon} alt='avatar' />
                    </div>
                </div>
            </nav>
        </header>
    );
};

Header.prototype = {
    section: PropTypes.string,
};
export default Header;
