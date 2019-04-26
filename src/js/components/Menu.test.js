import { mount } from '@vue/test-utils';
import Menu from './Menu.vue';

describe('Menu', () => {
	const wrapper = mount(Menu, {
		propsData: {
			active: false,
		}
	});

	it('Is a vue instance', () => {
		expect(wrapper.isVueInstance()).toBe(true);
	});

	it('Should be active', () => {
		wrapper.setProps({active: true});
		expect(wrapper.classes('menu--active')).toBe(true);
	});
});