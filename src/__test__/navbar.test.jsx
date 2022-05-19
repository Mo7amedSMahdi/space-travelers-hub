import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/header/Navbar';

describe('My Profile tests', () => {
  it('render test', () => {
    const tree = render(
      <Router>
        <NavBar />
      </Router>,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should contain Space Travlers Hub title', () => {
    render(
      <Router>
        <NavBar />
      </Router>,
    );

    expect(screen.getByRole('heading', { name: /Space Travlers' Hub/i })).toBeInTheDocument();
  });
});
