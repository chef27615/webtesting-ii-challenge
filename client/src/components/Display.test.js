import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';
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

    it('should have value', ()=> {
        const { queryAllByText } = render(<Display  />);
        expect(queryAllByText(/balls/i)).not.toBeNull();
    })
})