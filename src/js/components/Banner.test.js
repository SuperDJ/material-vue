import { mount } from '@vue/test-utils';
import Banner from './Banner.vue';

describe('Banner', () => {
	const wrapper = mount(Banner, {
		propsData: {
			content: '',
		}
	});

	it('Is a vue instance', () => {
		expect(wrapper.isVueInstance()).toBe(true);
	});

	it('Sets the content correct', () => {
		wrapper.setProps({content: 'Title'});
		expect(wrapper.text()).toBe('Title');
	});

	it('Is a single line', () => {
		wrapper.setProps({single: true});
		expect(wrapper.classes('banner--single-line')).toBe(true);
	});

	it('Is a multi line', () => {
		wrapper.setProps({multi: true});
		expect(wrapper.classes('banner--multi-line')).toBe(true);
	});

	it('Is a image multi line', () => {
		wrapper.setProps({image: true});
		expect(wrapper.classes('banner--image-multi-line')).toBe(true);
	});

	it('Has an image', () => {
		wrapper.setProps({
			image: 'test.jpg',
		});

		expect(wrapper.contains('img')).toBe(true);
	});
});