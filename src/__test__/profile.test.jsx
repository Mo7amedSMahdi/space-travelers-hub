import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile from '../components/profile/Profile';
import store from '../store/configureStore';

describe('My Profile tests', () => {
  it('render test', () => {
    const tree = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should contain My Missions title', () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );

    expect(screen.getByRole('heading', { name: /My Missions/i })).toBeInTheDocument();
  });

  it('should contain My Rockets title', () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );

    expect(screen.getByRole('heading', { name: /My Rockets/i })).toBeInTheDocument();
  });
});
