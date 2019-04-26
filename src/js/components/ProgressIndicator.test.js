import { mount } from '@vue/test-utils';
import ProgressIndicator from './ProgressIndicator.vue';

describe('ProgressIndicator', () => {
	const wrapper = mount(ProgressIndicator, {
		propsData: {
			active: false,
		}
	});

	it('Is a vue instance', () => {
		expect(wrapper.isVueInstance()).toBe(true);
	});

	it('Should be determinate', () => {
		wrapper.setProps({determinate: true});
		expect(wrapper.classes('progress--determinate')).toBe(true);
	});

	it('Should be indeterminate', () => {
		wrapper.setProps({indeterminate: true});
		expect(wrapper.classes('progress--indeterminate')).toBe(true);
	});

	it('Should be 10% done', () => {
		wrapper.setProps({progress: 10});
		expect(wrapper.vm.progress).toBe(10);
	});
});