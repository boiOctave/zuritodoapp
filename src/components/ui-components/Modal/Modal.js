import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
//assets
import successicon from '../../../assets/images/success.svg';
import error from '../../../assets/images/error.svg';

import './Modal.css';

const Modal = ({ open, setOpen, success }) => {
    const drop = {
        hidden: {
            y: '-100vh',
        },
        visible: {
            y: '0',
            opacity: '1',
            transition: {
                duration: 0.1,
                type: 'spring',
                damping: 25,
                stiffness: 500,
            },
        },
        exit: { y: '100vh', opacity: 0 },
    };

    const handleModal = () => {
        setOpen((prev) => !prev);
    };
    console.log(open);
    return (
        <div
            className={`modal__container ${
                open === false ? 'closeModal' : ''
            }`}>
            <div
                className={`backdrop ${open === false ? 'closeModal' : ''}`}
                onClick={handleModal}></div>
            <motion.div
                variants={drop}
                initial='hidden'
                animate='visible'
                exit='exit'
                className={`modal ${open === false ? 'closeModal' : ''}`}>
                <div className='top__modal '>
                    <img
                        src={success ? successicon : error}
                        alt='closeicon'
                        onClick={handleModal}
                    />
                    <h4>{success ? 'Success!' : 'Error!'}</h4>
                    <p>
                        {success
                            ? 'You have successful made a basic subscription of $6.00'
                            : 'Ooopss! something went wrong, check your card details again and input the correct details.'}{' '}
                    </p>
                </div>
                <div className='bottom__modal'>
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.9 }}
                        className='button'
                        onClick={handleModal}>
                        {success ? 'Back Home ' : 'Try Again'}
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

Modal.prototype = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
    success: PropTypes.bool,
};
export default Modal;
