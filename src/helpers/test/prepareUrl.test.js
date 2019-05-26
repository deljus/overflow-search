import { prepareUrl } from 'helpers';

describe('prepareUrl', () => {
    it('empty value', () => {
        expect(prepareUrl()).toEqual();
    });

    it('pass 1 parameter (url)', () => {
        expect(prepareUrl('http://test.com')).toEqual('http://test.com');
    });

    it('pass 2 parameter (url, params)', () => {
        expect(prepareUrl('http://test.com/:id', { id: 'test' })).toEqual('http://test.com/test');
        expect(prepareUrl('http://test.com/:id', { id1: 'test' })).toEqual('http://test.com/:id');
    });

    it('pass 3 parameter (url, params, getParams)', () => {
        expect(prepareUrl('http://test.com/:id', { id: 'test' }, { test: 'test' })).toEqual('http://test.com/test?test=test');
        expect(prepareUrl('http://test.com/:id', { id1: 'test' }, {} )).toEqual('http://test.com/:id');
    });
});
