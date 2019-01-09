import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatusBar.module.css';

const StatusBar = ({ totalUsers, currentPage, totalPages }) => (
    <article className={styles.root}>
        <p className={styles.block}>
            {totalUsers} Users
        </p>
        <p className={styles.block}>
            Page {currentPage} / {totalPages}
        </p>
    </article>
);

StatusBar.propTypes = {
    totalUsers: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired
};

export default StatusBar;