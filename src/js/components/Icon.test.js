import { mount } from '@vue/test-utils';
import Icon from './Icon.vue';

describe('Icon', () => {
	const wrapper = mount(Icon, {
		propsData: {
			icon: '',
		}
	});

	it('Is a vue instance', () => {
		expect(wrapper.isVueInstance()).toBe(true);
	});

	it('Sets the icon correct', () => {
		wrapper.setProps({icon: 'menu'});
		expect(wrapper.text()).toBe('menu');
	});

	it('Should be able to fire a function', () => {
		let count = 0;
		function fn () { count++; }

		wrapper.setProps({
			action: fn
		});

		wrapper.trigger('click');

		expect(count).toBe(1);
	});
});