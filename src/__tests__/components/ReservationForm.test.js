import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ReservationForm from '../../components/ReservationForm';

const mockStore = configureStore([]);

const initialState = {
  currentUser: {
    id: 1,
    username: 'azamat',
    token: 'TOKEN',
    reservations: [
      {
        id: 1,
        date: '2021-11-30',
        created_at: '2021-09-27T15:44:07.581Z',
        trip: {
          id: 1,
          title: 'ALAMEDIN GORGE',
        },
      },
    ],
    loading: false,
  },
};

describe('TripCard', () => {
  let store;
  configure({ adapter: new Adapter() });
  const tripDates = [
    {
      id: 1,
      date: '2021-11-30',
    },
    {
      id: 2,
      date: '2021-12-01',
    },
  ];

  it('should match the snapshot', () => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();

    const wrapper = shallow(
      <Provider store={store}>
        <ReservationForm tripDates={tripDates} />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
