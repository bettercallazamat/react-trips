import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Feedback from '../../components/Feedback';

describe('Feedback', () => {
  configure({ adapter: new Adapter() });
  const mockStore = configureStore([]);
  const store = mockStore({});
  store.dispatch = jest.fn();
  const type = 'error';
  const feedbackMessage = 'Error text';

  it('should match the snapshot', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Feedback feedback={feedbackMessage} type={type} />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
