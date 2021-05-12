import React from 'react';
import TestRenderer from 'react-test-renderer';
import Loader from '../components/Loader';

describe('There is a Loader', () => {
    let renderer = null;
    let component = null;

    beforeEach(async () => {
        TestRenderer.act(() => {
            renderer = TestRenderer.create(<Loader />);
        });
        component = renderer.root;
    });

    afterEach(() => {
        renderer.unmount();
    });

    it('there is a div with the class loader', () => {
        const div = component.findByType('div');
        expect(div.props.className).toBe('loader');
    });
});
