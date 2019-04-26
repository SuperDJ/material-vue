import { mount } from '@vue/test-utils';
import Dialog from './Dialog.vue';

describe('Dialog', () => {
	const wrapper = mount(Dialog, {
		propsData: {
			title: '',
			active: false
		}
	});

	it('Is a vue instance', () => {
		expect(wrapper.isVueInstance()).toBe(true);
	});

	it('Sets the title correct', () => {
		wrapper.setProps({title: 'Title'});
		expect(wrapper.text()).toBe('Title');
	});

	it('Should be active', () => {
		wrapper.setProps({active: true});
		expect(wrapper.classes('dialog--active')).toBe(true);
	});

	it('Should be scroll', () => {
		wrapper.setProps({scroll: true});
		expect(wrapper.classes('dialog--scroll')).toBe(true);
	});

	it('Should be simple', () => {
		wrapper.setProps({simple: true});
		expect(wrapper.classes('dialog--simple')).toBe(true);
	});

	it('Should be alert', () => {
		wrapper.setProps({alert: true});
		expect(wrapper.classes('dialog--alert')).toBe(true);
	});

	it('Should be confirm', () => {
		wrapper.setProps({confirm: true});
		expect(wrapper.classes('dialog--confirm')).toBe(true);
	});

	it('Should be full-screen', () => {
		wrapper.setProps({fullScreen: true});
		expect(wrapper.classes('dialog--full-screen')).toBe(true);
	});

	it('Should be able to submit a form', () => {
		let count = 0;
		const form = wrapper.find('form');
		function fn () { count++; }

		wrapper.setProps({
			action: fn
		});

		form.trigger('submit');

		expect(count).toBe(1);
	});
});