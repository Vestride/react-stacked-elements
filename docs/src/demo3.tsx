import React, { useState } from 'react';

import StackedElements from '../..';

import demoStyles from './demo.module.css';
import styles from './demo3.module.css';

export const Demo3: React.FunctionComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className={demoStyles.demo}>
      <StackedElements selectedIndex={selectedIndex}>
        <div className={styles.one} />
        <div className={styles.two} />
        <div className={styles.three} />
        <div className={styles.four} />
      </StackedElements>

      <button onClick={() => setSelectedIndex((index) => (index === 3 ? 0 : index + 1))}>Next</button>
    </div>
  );
};
