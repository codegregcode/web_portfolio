import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import Projects from '../components/Projects';
import projectsData from '../data/projectsData';

describe('Projects Component', () => {
  it('displays the correct number of project cards', () => {
    render(<Projects />);
    const projectCards = screen.getAllByRole('article');
    expect(projectCards.length).toBe(projectsData.length);
  });

  it('displays project details correctly', () => {
    render(<Projects />);
    projectsData.forEach((project) => {
      expect(screen.getByText(project.name)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });

  it('contains the correct links for each project', () => {
    render(<Projects />);
    projectsData.forEach((project) => {
      const githubLink = screen
        .getByText(project.name)
        .closest('.project-card')
        .querySelector('.github-project')
        .closest('a');
      const deployLink = screen
        .getByText(project.name)
        .closest('.project-card')
        .querySelector('.internet-project')
        .closest('a');
      expect(githubLink).toHaveAttribute('href', project.github_link);
      expect(deployLink).toHaveAttribute('href', project.deploy_link);
    });
  });
});
