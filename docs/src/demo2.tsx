import React, { useState } from 'react';

import StackedElements from '../..';

import demoStyles from './demo.module.css';
import styles from './demo2.module.css';

export const Demo2: React.FunctionComponent = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  return (
    <div className={demoStyles.demo}>
      <StackedElements selectedIndex={isConfirmed ? 1 : 0}>
        <button onClick={() => setIsConfirmed(true)}>Confirm</button>
        <video autoPlay muted loop playsInline className={styles.video}>
          <source
            src="https://media2.giphy.com/media/f3jZ8moRBbEvNJjOtu/giphy.mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
          <a href="https://media2.giphy.com/media/f3jZ8moRBbEvNJjOtu/giphy.gif">
            Your browser does not support the mp4 video codec.
          </a>
        </video>
      </StackedElements>

      <button className={styles.reset} onClick={() => setIsConfirmed(false)}>
        reset
      </button>
    </div>
  );
};
