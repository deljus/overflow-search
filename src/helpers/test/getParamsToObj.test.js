import { getParamsToObj } from 'helpers';

describe('getParamsToObj', () => {
    it('empty value', () => {
        expect(getParamsToObj()).toEqual({});
    });

    it('parsing get params', () => {
        expect(getParamsToObj('?test=1&test2=2')).toEqual({test: '1', test2: '2'});
    });

    it('wrong parameters', () => {
        expect(getParamsToObj('?test&test2')).toEqual({});
    });
});




