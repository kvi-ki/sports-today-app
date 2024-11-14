import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../../src/components/header/Header';
import React from 'react';

describe('Header', () => {
  it('should render a heading', () => {
    render(<Header />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
