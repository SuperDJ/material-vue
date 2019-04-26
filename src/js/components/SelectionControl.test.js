import { mount } from '@vue/test-utils';
import SelectionControl from './SelectionControl.vue';

describe('SelectionControl', () => {
	const wrapper = mount(SelectionControl, {
		propsData: {
			value: '',
			label: ''
		}
	});

	it('Is a vue instance', () => {
		expect(wrapper.isVueInstance()).toBe(true);
	});

	it('Sets the label correct', () => {
		wrapper.setProps({label: 'Title'});
		expect(wrapper.text()).toBe('Title');
	});

	it('Should be a checkbox', () => {
		wrapper.setProps({checkbox: true});
		expect(wrapper.find('input').classes('checkbox')).toBe(true);
	});

	it('Should be a switch', () => {
		wrapper.setProps({switches: true, checkbox: false});
		expect(wrapper.find('input').classes('switch')).toBe(true);
	});

	it('Should set name correct', () => {
		wrapper.setProps({name: 'checkbox', checkbox: true, switches: false});
		expect(wrapper.find('input').attributes('name')).toBe('checkbox');
	});
});