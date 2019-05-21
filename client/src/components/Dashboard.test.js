import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard /> ', () => {
    it('to run without crash', () => {
        render(<Dashboard />)
        cleanup()
    })

    it('record a hit', () => {
        const { getByText } = render(<Dashboard />);
        const hitButton = getByText(/hit/i);
        fireEvent.click(hitButton);
        getByText(/hit/i);
        cleanup();
    })

    it('ball event has registered', () => {
        const { getByTestId, getByText } = render(<Dashboard />);
        fireEvent.click(getByText('ball'));
        expect(getByTestId('ball')).toHaveTextContent('ball');
    })
})