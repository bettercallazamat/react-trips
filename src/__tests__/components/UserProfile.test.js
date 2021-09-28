import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import UserProfile from '../../components/UserProfile';

const mockStore = configureStore([]);

const initialState1 = {
  currentUser: {
    id: null,
    username: null,
    token: null,
  }
};

const initialState2 = {
  currentUser: {
    id: 1,
    username: "azamat",
    token: "FAKE-TOKEN",
  }
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
  useRouteMatch: () => ({ url: '/trips/1' }),
}));

describe('Page Trip', () => {
  let store;
  afterAll(cleanup);

  it('renders required data if there is reservations made', () => {
    store = mockStore(initialState1);
    store.dispatch = jest.fn();

    render(
      <Provider store={store}><BrowserRouter><UserProfile /></BrowserRouter></Provider>,
    );

    expect(screen.getByText('LOGIN')).toBeInTheDocument();
    expect(screen.getByText('SIGN UP')).toBeInTheDocument();
  });

  it('renders required data if there is reservations made', () => {
    store = mockStore(initialState2);
    store.dispatch = jest.fn();

    render(
      <Provider store={store}><BrowserRouter><UserProfile /></BrowserRouter></Provider>,
    );

    expect(screen.getByText('azamat')).toBeInTheDocument();
    expect(screen.getByText('LOGOUT')).toBeInTheDocument();
  });
});
