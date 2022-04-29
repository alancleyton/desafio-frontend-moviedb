import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

describe('Testing HelloWorld', () => {
  it('should render correctly with msg prop value', () => {
    render(<HelloWorld msg="Hello World test!" />);
    expect(screen.getByText('Hello World test!')).toBeInTheDocument();
  });
});
