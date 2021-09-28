import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import LoginForm from '../../components/LoginForm';

describe('LoginForm', () => {
  configure({ adapter: new Adapter() });
  const mockStore = configureStore([]);
  const store = mockStore({});
  store.dispatch = jest.fn();

  it('should match the snapshot', () => {
    const wrapper = shallow(<Provider store={store}><LoginForm onCancel={jest.fn} /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
