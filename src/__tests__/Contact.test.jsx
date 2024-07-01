import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import Contact from '../components/Contact';

describe('Contact component', () => {
  it('renders github link', () => {
    render(<Contact />);
    const githubLink = screen.getByTestId('github-link-contact');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/codegregcode'
    );
    expect(githubLink).toHaveAttribute('target', '_blank');
  });

  it('renders linkedin link', () => {
    render(<Contact />);
    const linkedinLink = screen.getByTestId('linkedin-link-contact');
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/greg-cain/'
    );
    expect(linkedinLink).toHaveAttribute('target', '_blank');
  });

  it('renders email link', () => {
    render(<Contact />);
    const emailSection = screen.getByTestId('email-link-contact');
    expect(emailSection).toBeInTheDocument();
  });
});
