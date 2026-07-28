import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a resume link that opens the PDF in the same tab', () => {
  render(<App />);
  const resumeLink = screen.getByRole('link', { name: /view resume/i });

  expect(resumeLink).toHaveAttribute('href');
  expect(resumeLink.getAttribute('href')).not.toBeFalsy();
  expect(resumeLink).not.toHaveAttribute('target');
});
