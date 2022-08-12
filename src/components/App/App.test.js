import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App/> component should', () => {
  
  test('contain search user form', () => {
    render(<App />);
    const searchUserForm = screen.getByTestId(/search-user-form/i);
    expect(searchUserForm).toBeInTheDocument();
  });

  test('contain user info section', () => {
    const userInfoSection = screen.getByTestId(/user-info-section/i);
    expect(userInfoSection).toBeInTheDocument();
  });
  
});
