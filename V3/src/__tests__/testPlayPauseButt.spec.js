// import React from 'react';
// import { render, fireEvent, cleanup } from '@testing-library/react';
// import PlayPauseButt from '../components/playPauseButt';
// import Enzyme, { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16.3';

// Enzyme.configure({ adapter: new Adapter() });

// describe('<PlayPauseButt />', () => {
//     let getByTestId;

//     afterEach(cleanup);

//     describe('sending the play/pause button', () => {
//         let clickHandler;
//         beforeEach(() => {
//             clickHandler = jest.fn();
//             ({ getByTestId } = render(<PlayPauseButt onSend={clickHandler} />));

//             fireEvent.change(
//                 it('changes the playing boolean value', () => {
//                     expect(getByTestId('playPauseButt').value).toEqual(playing)
//                 })
//             )

//             fireEvent.click(getByTestId('playPauseButt'));
//         });
//         it('initiates audio.play() or audio.pause() functionality', () => {
//             expect(clickHandler).toHaveBeenCalled();
//         });
//     });
// });

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme,{ shallow } from 'enzyme';
import PlayPauseButt from '../components/playPauseButt';
Enzyme.configure({ adapter: new Adapter() });

it('should call mock function when the button is clicked', () => {
    const dummyFxn = jest.fn();
    const toggle = shallow(
       <PlayPauseButt playButtToggle={dummyFxn} />
    );
    toggle.simulate('click');
    expect(dummyFxn).toHaveBeenCalled();
    afterEach(() => {
        jest.clearAllMocks();
    })
}) 