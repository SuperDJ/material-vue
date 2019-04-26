import { mount } from '@vue/test-utils';
import AppBar from './AppBar.vue';

describe('AppBar', () => {
	const wrapper = mount(AppBar, {
		propsData: {
			title: '',
			action: function() {},

		}
	});

	it('Is a vue instance', () => {
		expect(wrapper.isVueInstance()).toBe(true);
	});

	it('Sets the title correct', () => {
		wrapper.setProps({title: 'Title'});
		// Menu comes from the icon
		expect(wrapper.text()).toBe('menu Title');
	});

	it('Should be fixed', () => {
		wrapper.setProps({fixed: true});
		expect(wrapper.classes('app-bar--fixed')).toBe(true);
	});

	it('Should be fixed to the drawer', () => {
		wrapper.setProps({drawerFixed: true});
		expect(wrapper.classes('app-bar--drawer-fixed')).toBe(true);
	})
});