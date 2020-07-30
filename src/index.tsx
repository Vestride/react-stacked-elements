import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

interface StackedElementsProps {
  className?: string;
  children: React.ReactNode;
  selectedIndex: number;
}

const StackedElements: React.FunctionComponent<StackedElementsProps> = ({ className, children, selectedIndex }) => {
  const hiddenClasses = `${styles.invisible} ${styles.z0}`;
  const visibleClass = styles.z1;
  return (
    <div className={`${styles.wrapper}${className ? ` ${className}` : ''}`}>
      {React.Children.map(children, (child, i) => (
        <div
          key={`stacked-elements-content-${i}`}
          data-testid={`stacked-elements-content-${i}`}
          aria-hidden={i !== selectedIndex}
          className={`${styles.content} ${i === selectedIndex ? visibleClass : hiddenClasses}`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

/* @__PURE__*/ Object.assign(StackedElements, { displayName: 'StackedElements' });

if (process.env.NODE_ENV !== 'production') {
  StackedElements.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    className: PropTypes.string,
    selectedIndex: PropTypes.number.isRequired,
  };
}

export default StackedElements;
