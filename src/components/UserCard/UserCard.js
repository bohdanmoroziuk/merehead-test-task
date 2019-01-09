import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserCard.module.css';

const UserCard = ({ name, surname, desc }) => (
    <article className={styles.root}>
        <p className={styles.fullname}>
            {name} {surname}
        </p>
        <p className={styles.desc}>
            {desc}
        </p>
    </article>
); 

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
};

export default UserCard;