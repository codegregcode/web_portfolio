import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import Skills from '../components/Skills';

describe('Skills component', () => {
  it('renders react skill', () => {
    render(<Skills />);
    const reactSkill = screen.getByTestId('react-skill');
    expect(reactSkill).toBeInTheDocument();
  });

  it('renders firebase skill', () => {
    render(<Skills />);
    const firebaseSkill = screen.getByTestId('firebase-skill');
    expect(firebaseSkill).toBeInTheDocument();
  });

  it('renders pg skill', () => {
    render(<Skills />);
    const pgSkill = screen.getByTestId('pg-skill');
    expect(pgSkill).toBeInTheDocument();
  });

  it('renders js skill', () => {
    render(<Skills />);
    const jsSkill = screen.getByTestId('js-skill');
    expect(jsSkill).toBeInTheDocument();
  });

  it('renders html skill', () => {
    render(<Skills />);
    const htmlSkill = screen.getByTestId('html-skill');
    expect(htmlSkill).toBeInTheDocument();
  });

  it('renders css skill', () => {
    render(<Skills />);
    const cssSkill = screen.getByTestId('css-skill');
    expect(cssSkill).toBeInTheDocument();
  });

  it('renders git skill', () => {
    render(<Skills />);
    const gitSkill = screen.getByTestId('git-skill');
    expect(gitSkill).toBeInTheDocument();
  });
});
