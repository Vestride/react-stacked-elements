import React from 'react';
import { render, screen } from '@testing-library/react';

import StackedElements from '..';

describe('StackedElements', () => {
  it('renders the both contents', () => {
    render(<StackedElements isSelected content1={<p>One</p>} content2={<p>Two</p>} />);
    expect(screen.getByText('One')).toBeTruthy();
    expect(screen.getByText('Two')).toBeTruthy();
  });

  it('renders the first content when selected', () => {
    render(<StackedElements isSelected content1={<p>One</p>} content2={<p>Two</p>} />);
    expect(screen.getByTestId('content1').getAttribute('aria-hidden')).toBe('false');
    expect(screen.getByTestId('content2').getAttribute('aria-hidden')).toBe('true');
  });

  it('renders the second when not selected', () => {
    render(<StackedElements isSelected={false} content1={<p>One</p>} content2={<p>Two</p>} />);
    expect(screen.getByTestId('content2').getAttribute('aria-hidden')).toBe('false');
    expect(screen.getByTestId('content1').getAttribute('aria-hidden')).toBe('true');
  });

  it('accepts a className prop', () => {
    render(<StackedElements isSelected className="foo" content1={<p>One</p>} content2={<p>Two</p>} />);
    expect(screen.getByText('One')).toBeTruthy();
  });
});
