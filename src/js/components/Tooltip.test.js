import { mount } from '@vue/test-utils';
import Tooltip from './Tooltip.vue';

describe('Tooltip', () => {
	const wrapper = mount(Tooltip, {
		slots: {
			default: '<button>Test</button>'
		},
		propsData: {
			content: ''
		}
	});

	it('Is a vue instance', () => {
		expect(wrapper.isVueInstance()).toBe(true);
	});

	it('Sets top', () => {
		wrapper.setProps({ top: true });
		expect(wrapper.find('span').classes('tooltip--top')).toBe(true);
	});

	it('Sets right', () => {
		wrapper.setProps({ right: true });
		expect(wrapper.find('span').classes('tooltip--right')).toBe(true);
	});

	it('Sets bottom', () => {
		wrapper.setProps({ bottom: true });
		expect(wrapper.find('span').classes('tooltip--bottom')).toBe(true);
	});

	it('Sets left', () => {
		wrapper.setProps({ left: true });
		expect(wrapper.find('span').classes('tooltip--left')).toBe(true);
	});

	it('Works with a button', () => {
		expect(wrapper.find('button')).toBe(true);
	})
});