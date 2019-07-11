import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/index.jsx';

configure({adapter: new Adapter()});

test('App', () => {
    const app = shallow(<App />);
    expect(1).toEqual(1);
});