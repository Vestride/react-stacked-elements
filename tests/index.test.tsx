import React from 'react';
import { render, screen } from '@testing-library/react';

import StackedElements from '../src';

describe('StackedElements', () => {
  it('renders the both contents', () => {
    render(
      <StackedElements selectedIndex={0}>
        <p>One</p>
        <p>Two</p>
      </StackedElements>,
    );
    expect(screen.getByText('One')).toBeTruthy();
    expect(screen.getByText('Two')).toBeTruthy();
  });

  it('renders the first content when selected', () => {
    render(
      <StackedElements selectedIndex={0}>
        <p>One</p>
        <p>Two</p>
      </StackedElements>,
    );
    expect(screen.getByTestId('stacked-elements-content-0').getAttribute('aria-hidden')).toBe('false');
    expect(screen.getByTestId('stacked-elements-content-1').getAttribute('aria-hidden')).toBe('true');
  });

  it('renders the second when not selected', () => {
    render(
      <StackedElements selectedIndex={1}>
        <p>One</p>
        <p>Two</p>
      </StackedElements>,
    );
    expect(screen.getByTestId('stacked-elements-content-1').getAttribute('aria-hidden')).toBe('false');
    expect(screen.getByTestId('stacked-elements-content-0').getAttribute('aria-hidden')).toBe('true');
  });

  it('accepts a className prop', () => {
    const { container } = render(
      <StackedElements selectedIndex={0} className="foo">
        <p>One</p>
        <p>Two</p>
      </StackedElements>,
    );
    expect(container.firstElementChild.className.includes('foo')).toBe(true);
  });
});
