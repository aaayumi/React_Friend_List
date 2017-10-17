import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import FriendListApp from './containers/FriendListApp';
import AddFriendInput from './components/AddFriendInput';
import FriendList from './components/FriendList';
import FriendListItem from './components/FriendListItem';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

Enzyme.configure({ adapter: new Adapter() });

it('AddFriendInput', () => {
  const wrapper = shallow(<AddFriendInput />);
  const textHeader =   <p>Select the gender of a friend</p>;
  expect(wrapper.contains(textHeader)).toEqual(true);
});
