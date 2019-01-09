import React from 'react';
import styles from './Overlay.module.css';

const Overlay = ({ children }) => (
    <div className={styles.root}>
        {children}
    </div>
);

export default Overlay;