import React from 'react';
import styles from '../styles/logo.css';

const Logo = () => (
  <div style={{position: 'relative', left: '1rem', minHeight: '100px'}}>
    <img
      src={require('../assets/bottle.png')}
      className={styles.bottle}
    />
    <img
      src={require('../assets/gear.png')}
      className={styles.gear}
    />
    <img
      src={require('../assets/gear.png')}
      className={styles.littlegear}
    />
  </div>
);

export default Logo;
