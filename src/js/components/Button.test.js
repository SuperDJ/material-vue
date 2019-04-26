import { mount } from '@vue/test-utils';
import Button from './Button.vue';

describe('Button', () => {
	const wrapper = mount(Button, {
		propsData: {
			content: '',
			action: function() {},

		}
	});

	it('Is a vue instance', () => {
		expect(wrapper.isVueInstance()).toBe(true);
	});

	it('Sets the content correct', () => {
		wrapper.setProps({content: 'Title'});
		expect(wrapper.text()).toBe('Title');
	});

	it('Should be text button', () => {
		wrapper.setProps({text: true});
		expect(wrapper.classes('button--text')).toBe(true);
	});

	it('Should be text button with an icon left', () => {
		wrapper.setProps({
			text: true,
			icon: 'menu',
			iconPosition: 'left'
		});
		expect(wrapper.classes('button--text--icon-left')).toBe(true);
	});

	it('Should be text button with an icon right', () => {
		wrapper.setProps({
			text: true,
			icon: 'menu',
			iconPosition: 'right'
		});
		expect(wrapper.classes('button--text--icon-right')).toBe(true);
	});

	it('Should be contained button', () => {
		wrapper.setProps({contained: true});
		expect(wrapper.classes('button--contained')).toBe(true);
	});

	it('Should be contained button with an icon left', () => {
		wrapper.setProps({
			text: true,
			icon: 'menu',
			iconPosition: 'left'
		});
		expect(wrapper.classes('button--contained--icon-left')).toBe(true);
	});

	it('Should be contained button with an icon right', () => {
		wrapper.setProps({
			text: true,
			icon: 'menu',
			iconPosition: 'right'
		});
		expect(wrapper.classes('button--contained--icon-right')).toBe(true);
	});

	it('Should be outlined button', () => {
		wrapper.setProps({outlined: true});
		expect(wrapper.classes('button--outlined')).toBe(true);
	});

	it('Should be outlined button with an icon left', () => {
		wrapper.setProps({
			text: true,
			icon: 'menu',
			iconPosition: 'left'
		});
		expect(wrapper.classes('button--outlined--icon-left')).toBe(true);
	});

	it('Should be outlined button with an icon right', () => {
		wrapper.setProps({
			text: true,
			icon: 'menu',
			iconPosition: 'right'
		});
		expect(wrapper.classes('button--outlined--icon-right')).toBe(true);
	});

	it('Should be a active button', () => {
		wrapper.setProps({active: true});
		expect(wrapper.classes('button--active')).toBe(true);
	});

	it('Should be a button button', () => {
		wrapper.setProps({type: 'button'});
		expect(wrapper.attributes('type')).toBe('button');
	});

	it('Should be a submit button', () => {
		wrapper.setProps({type: 'submit'});
		expect(wrapper.attributes('type')).toBe('submit');
	});

	it('Should fire a function', () => {
		let count = 0;
		function fn () { count++; }

		wrapper.setProps({
			action: fn
		});

	   	wrapper.trigger('click');

		expect(count).toBe(1);
	});
});