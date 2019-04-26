import { mount } from '@vue/test-utils';
import NavigationDrawer from './NavigationDrawer.vue';

describe('NavigationDrawer', () => {
	const wrapper = mount(NavigationDrawer, {
		propsData: {
			active: false,
		}
	});

	it('Is a vue instance', () => {
		expect(wrapper.isVueInstance()).toBe(true);
	});

	it('Should be active', () => {
		wrapper.setProps({active: true});
		expect(wrapper.classes('drawer--active')).toBe(true);
	});

	it('Should be fixed', () => {
		wrapper.setProps({fixed: true});
		expect(wrapper.classes('drawer--fixed')).toBe(true);
	});
});