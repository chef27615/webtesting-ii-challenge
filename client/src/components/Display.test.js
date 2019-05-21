import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {

    it('should render', ()=>{
        render(<Display />)
        cleanup()
    })

    it('should render `no props` when no props passed in', () => {
        const { getByText } = render(<Display />);
        getByText(/no props/i);
        cleanup();
    })

    // it('should have text', ()=> {
    //     const { getByTextById } = render(<Display />);
    //     const text = getByTextById('ball-counts')
    //     expect(text).toBeInTheDocument();
    // })
})