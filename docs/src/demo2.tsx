import React, { useState } from 'react';

import '../../dist/stacked-elements.css';
import StackedElements from '../..';

import demoStyles from './demo.module.css';
import styles from './demo1.module.css';

export const Demo2: React.FunctionComponent = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  return (
    <div className={demoStyles.demo}>
      <StackedElements selectedIndex={isConfirmed ? 1 : 0} className={styles.response}>
        <button onClick={() => setIsConfirmed(true)}>Confirm</button>
        <span>No</span>
      </StackedElements>

      <button onClick={() => setIsConfirmed(false)}>Unconfirm</button>
    </div>
  );
};
