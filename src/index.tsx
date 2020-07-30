import React from 'react';
import PropTypes from 'prop-types';

interface StackedElementsProps {
  className?: string;
  children: React.ReactNode;
  selectedIndex: number;
}

const StackedElements: React.FunctionComponent<StackedElementsProps> = ({ className, children, selectedIndex }) => (
  <div className={className} style={{ display: 'grid' }}>
    {React.Children.map(children, (child, i) => {
      const styles: React.CSSProperties = {
        gridColumnStart: 1,
        gridRowStart: 1,
      };
      if (i === selectedIndex) {
        styles.zIndex = 1;
      } else {
        styles.visibility = 'hidden';
        styles.zIndex = 0;
      }
      return (
        <div
          key={`stacked-elements-content-${i}`}
          data-testid={`stacked-elements-content-${i}`}
          aria-hidden={i !== selectedIndex}
          style={styles}
        >
          {child}
        </div>
      );
    })}
  </div>
);

if (process.env.NODE_ENV !== 'production') {
  StackedElements.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    className: PropTypes.string,
    selectedIndex: PropTypes.number.isRequired,
  };
}

export default StackedElements;
