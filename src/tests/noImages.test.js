import React from 'react';
import TestRenderer from 'react-test-renderer';
import NoImages from '../components/NoImages';

describe('There is a NoImages component', () => {
    let renderer = null;
    let component = null;

    beforeEach(async () => {
        TestRenderer.act(() => {
            renderer = TestRenderer.create(<NoImages />);
        });
        component = renderer.root;
    });

    afterEach(() => {
        renderer.unmount();
    });

    it('title h2 tag and text should show correctly', () => {
        const h2 = component.findByType('h2');
        expect(h2.props.children).toBe('No Images Found');
    });

    it('paragraph p tag and text should show correctly', () => {
        const p = component.findByType('p');
        expect(p.props.children).toBe('Please try a different search term');
    });
});
