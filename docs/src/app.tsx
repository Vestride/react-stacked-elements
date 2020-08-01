import React from 'react';

import { ModeSwitcher } from './mode-switcher';
import { Demo1 } from './demo1';
import { Demo2 } from './demo2';
import { Demo3 } from './demo3';

import styles from './app.module.css';

const App: React.FC = () => (
  <>
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <strong>
            <code>react-stacked-elements</code>
          </strong>
          <ModeSwitcher />
        </div>
      </div>
    </header>
    <main className={styles.container}>
      <blockquote className={styles.description}>
        Toggle the visibility of elements without causing a layout shift
      </blockquote>
      <p>Install with npm</p>
      <pre className={styles.pre}>
        <code>npm install react-stacked-elements</code>
      </pre>
      <h2>Demos</h2>
      <h3>Horizontal space</h3>
      <Demo1 />
      <pre className={styles.pre}>
        <code>{`<StackedElements selectedIndex={isChecked ? 0 : 1}>
  <span>Absolutely</span>
  <span>No</span>
</StackedElements>`}</code>
      </pre>
      <h3>Vertical space</h3>
      <Demo2 />
      <pre className={styles.pre}>
        <code>{`<StackedElements selectedIndex={isConfirmed ? 1 : 0}>
  <button onClick={() => setIsConfirmed(true)}>Confirm</button>
  <video />
</StackedElements>`}</code>
      </pre>
      <h3>Multiple elements</h3>
      <Demo3 />
      <pre className={styles.pre}>
        <code>{`<StackedElements selectedIndex={selectedIndex}>
  <div className={styles.one} />
  <div className={styles.two} />
  <div className={styles.three} />
  <div className={styles.four} />
</StackedElements>`}</code>
      </pre>
    </main>
  </>
);

export default App;
