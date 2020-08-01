import React, { useState } from 'react';

import StackedElements from '../..';

import demoStyles from './demo.module.css';
import styles from './demo1.module.css';

export const Demo1: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div className={demoStyles.demo}>
      <label htmlFor="rsvp-checkbox">
        <div className={styles.label}>Are you going?</div>
        <div className={styles.checkboxWrapper}>
          <StackedElements selectedIndex={isChecked ? 0 : 1} className={styles.response}>
            <span>Absolutely</span>
            <span>No</span>
          </StackedElements>
          <input id="rsvp-checkbox" type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        </div>
      </label>
    </div>
  );
};
