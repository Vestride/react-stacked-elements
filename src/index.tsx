import React from 'react';

import styles from './index.module.css';

interface StackedElementsProps {
  className?: string;
  content1: React.ReactNode;
  content2: React.ReactNode;
  isSelected: boolean;
}

const StackedElements: React.FunctionComponent<StackedElementsProps> = ({
  className,
  content1,
  content2,
  isSelected,
}) => {
  const hiddenClasses = `${styles.invisible} ${styles.z0}`;
  const visibleClass = styles.z1;
  return (
    <div className={`${styles.wrapper}${className ? ` ${className}` : ''}`}>
      <div
        data-testid="content1"
        aria-hidden={!isSelected}
        className={`${styles.content} ${isSelected ? visibleClass : hiddenClasses}`}
      >
        {content1}
      </div>
      <div
        data-testid="content2"
        aria-hidden={isSelected}
        className={`${styles.content} ${!isSelected ? visibleClass : hiddenClasses}`}
      >
        {content2}
      </div>
    </div>
  );
};

StackedElements.displayName = 'StackedElements';

export default StackedElements;
