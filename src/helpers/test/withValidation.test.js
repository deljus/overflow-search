import React from 'react';
import { mount } from 'enzyme';
import withValidation from '../withValidation';

const NullComponent = () => null;

const Comp = withValidation(NullComponent);

describe('withValidation', () => {
    it('props', () => {
        const wrapper = mount(<Comp/>);
        expect(wrapper.find(NullComponent).props()).toEqual({ error: null, onChange: expect.any(Function)});
    });

    it('pass validator', () => {
        const wrapper = mount(<Comp validators={[{ error: 'test', fn: (value) => !!value }]}/>);
        wrapper.find(NullComponent).props().onChange('');
        wrapper.update();
        expect(wrapper.find(NullComponent).props()).toEqual({ error: 'test', onChange: expect.any(Function)});
    });
});
