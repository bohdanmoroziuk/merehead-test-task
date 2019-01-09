import React from 'react';
import PropTypes from 'prop-types';
import UserCard from '../UserCard/UserCard';
import styles from './UserList.module.css';

const UserList = ({ users }) => (
    <div className={styles.root}>
        {users && users.map(
            user => <UserCard key={user.id} {...user} />
        )}
    </div>
);

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]).isRequired,
            name: PropTypes.string.isRequired,
            surname: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default UserList;