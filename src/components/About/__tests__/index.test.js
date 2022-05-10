import React from 'react';
import { render, cleanup } from '@testing-library/react';
// import extend library from jest-dom
import '@testing-library/jest-dom/extend-expect';
// the component being tested
import About from '../index';


afterEach(cleanup);

describe('About component', () => {
    // First test to verfiy component is rendering
    it('renders', () => {
        render(<About />);
    });
    // Second test
    it('matched snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})