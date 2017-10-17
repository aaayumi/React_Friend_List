import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import AddFriendInput from './components/AddFriendInput';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


it('render AddFriendInput', () => {
  const wrapper = shallow(<AddFriendInput />);
  const textHeader = <p>Select the gender of a friend</p>;
;
  expect(wrapper.contains(textHeader)).toEqual(true);
});
