import React from 'react';
import { mount } from 'enzyme';
import Table from './Table';

const NullComponent = () => null;

describe('Table', () => {
    it('creating', () => {
        const wrapper = mount(<Table/>);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('create items', () => {

        const columns = [{
            title: 'Title',
            dataIndex: 'test',
        }];

        const dataSource = [{
            test: 'test'
        }];

        const wrapper = mount(<Table columns={columns} dataSource={dataSource}/>);
        expect(wrapper.find('th').text()).toBe('Title');
        expect(wrapper.find('td').text()).toBe('test');
    });

    it('render items', () => {

        const columns = [{
            title: 'Title',
            dataIndex: 'test',
            render: (val) => <NullComponent val={val} />
        }];

        const dataSource = [{
            test: 'test'
        }];

        const wrapper = mount(<Table columns={columns} dataSource={dataSource}/>);
        expect(wrapper.find('th').text()).toBe('Title');
        expect(wrapper.find(NullComponent).props()).toEqual({ val: 'test' });
    });
});
