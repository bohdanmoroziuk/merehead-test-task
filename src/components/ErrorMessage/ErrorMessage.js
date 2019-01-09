import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ text }) => (
    <p className={styles.root}>
        {text}
    </p>
);

ErrorMessage.propTypes = {
    text: PropTypes.string.isRequired
};

export default ErrorMessage;