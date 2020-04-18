import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme,{ mount, shallow } from 'enzyme';
import PlayPauseButt from '../components/playPauseButt';
Enzyme.configure({ adapter: new Adapter() });

const mockProps = {
    songs: {
        previewUrl: "hello"
    }
}
afterEach(() => {
    jest.clearAllMocks();
})
it('should call mock function when the button is clicked', () => {
    const dummyFxn = jest.fn();
    const wrapper = shallow((<PlayPauseButt playButtToggle={dummyFxn} {...mockProps} />
    ));
    wrapper.find('button').simulate('click')
    expect(dummyFxn.mock.calls.length).toEqual(1);
})

