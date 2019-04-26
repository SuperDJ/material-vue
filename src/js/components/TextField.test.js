import { mount } from '@vue/test-utils';
import TextField from './TextField.vue';

describe('TextField', () => {
	const wrapper = mount(TextField, {
		propsData: {
			label: '',
			name: '',
			id: ''
		}
	});

	it('Is a vue instance', () => {
		expect(wrapper.isVueInstance()).toBe(true);
	});

	it('Should set id and for attributes', () => {
		wrapper.setProps({
			id: 'textfield'
		});

		const input = wrapper.find('input');
		const label = wrapper.find('label');

		expect(input.attributes('id')).toBe('textfield');
		expect(label.attributes('for')).toBe('textfield');
	});

	it('Should set name', () => {
		wrapper.setProps({name: 'textfield'});
		expect(wrapper.find('input').attributes('name')).toBe('textfield');
	});

	it('Should be filled', () => {
		wrapper.setProps({filled: true});
		expect(wrapper.classes('text-field--filled')).toBe(true);
	});

	it('Should be select', () => {
		wrapper.setProps({select: true});
		expect(wrapper.classes('text-field--select')).toBe(true);
	});

	it('Should be invalid', () => {
		wrapper.setProps({error: true});
		expect(wrapper.classes('text-field--invalid')).toBe(true);
	});

	it('Should be outlined', () => {
		wrapper.setProps({outlined: true});
		expect(wrapper.classes('text-field--outlined')).toBe(true);
	});

	it('Should set label', () => {
		wrapper.setProps({label: 'textfield'});
		expect(wrapper.find('label').text()).toBe('textfield');
	});

	it('Should add helper text', () => {
		wrapper.setProps({ helper: 'textfield' });
		expect(wrapper.classes('text-field--helper-text')).toBe(true);

		const helper = wrapper.find('.text-field__helper-text');
		expect(helper.is('div')).toBe(true);
	});

	it('Should be required', () => {
		wrapper.setProps({required: true});
		expect(wrapper.find('input').attributes('required')).toBe('required');
	});

	it('Should be date', () => {
		wrapper.setProps({type: 'date'});
		expect(wrapper.find('input').attributes('type')).toBe('date');
	});

	it('Should be textarea', () => {
		wrapper.setProps({type: 'textarea'});
		const textarea = wrapper.find('textarea');

		expect(textarea.is('textarea')).toBe(true);
	});
});