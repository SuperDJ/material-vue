import { mount } from '@vue/test-utils';
import Radio from './Radio.vue';

describe('Radio', () => {
	const wrapper = mount(Radio, {
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

	it('Should set name correct', () => {
		wrapper.setProps({name: 'checkbox'});
		expect(wrapper.find('input').attributes('name')).toBe('checkbox');
	});
});