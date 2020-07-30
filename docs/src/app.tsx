import React from 'react';

import { Demo1 } from './demo1';
import { Demo2 } from './demo2';

import styles from './app.module.css';

const App: React.FC = () => (
  <>
    <header className={styles.header}>
      <div className={styles.container}>
        <code>react-stacked-elements</code>
      </div>
    </header>
    <main className={styles.container}>
      <blockquote className={styles.description}>
        Toggle the visibility of two elements without removing them from the document layout
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
  <video autoPlay muted loop playsInline>
    <source
      src="https://media2.giphy.com/media/f3jZ8moRBbEvNJjOtu/giphy.mp4"
      type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
    />
  </video>
</StackedElements>`}</code>
      </pre>
    </main>
  </>
);

export default App;
