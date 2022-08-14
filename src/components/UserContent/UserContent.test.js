import { render, screen } from "@testing-library/react";
import App from "../App/App";

test('contain user info section', () => {
    render(<App />);
    const userInfoSection = screen.getByTestId(/user-info-section/i);
    expect(userInfoSection).toBeInTheDocument();
  });

  test('contain user repos section', () => {
    render(<App />);
    const userReposSection = screen.getByTestId(/user-repos-section/i);
    expect(userReposSection).toBeInTheDocument();
  });

  test('contain user\'s active repo details section', () => {
    render(<App />);
    const activeRepoDetailsSection = screen.getByTestId(/active-repo-details-section/i);
    expect(activeRepoDetailsSection).toBeInTheDocument();
  })