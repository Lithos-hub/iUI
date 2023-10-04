import { render } from '@testing-library/vue';
import IuiButton from './iui-button.vue';

const getRender = ({ ...props }) =>
	render(IuiButton, {
		props,
	});

describe('Given IuiButton component', () => {
	describe('When the color prop is provided', () => {
		it('Then it should render a button with the correct color', () => {
			const { getByTestId } = getRender({
				color: 'primary',
			});
			const wrapper = getByTestId('iui-button');

			expect(wrapper.getAttribute('class')).toContain('button__primary');
		});
	});

	describe('When the size prop is provided', () => {
		it('Then it should render a button with the correct size', () => {
			const { getByTestId } = getRender({
				size: 'md',
			});
			const wrapper = getByTestId('iui-button');

			expect(wrapper.getAttribute('class')).toContain('button__md');
		});
	});

	describe('When the radius prop is provided', () => {
		it('Then it should render a button with the correct radius', () => {
			const { getByTestId } = getRender({
				radius: 'md',
			});
			const wrapper = getByTestId('iui-button');

			expect(wrapper.getAttribute('class')).toContain('button__radius--md');
		});
	});

	describe('When no prop is provided', () => {
		it('Then it should render a button with the variant solid', () => {
			const { getByTestId } = getRender({});
			const wrapper = getByTestId('iui-button');

			expect(wrapper.getAttribute('class')).toContain('button__solid');
		});
	});

	describe('When the variant prop is provided', () => {
		it('Then it should render a button with the correct variant', () => {
			const { getByTestId } = getRender({
				variant: 'outline',
			});
			const wrapper = getByTestId('iui-button');

			expect(wrapper.getAttribute('class')).toContain('button__outline');
		});
	});

	describe('When the text prop is provided', () => {
		it('Then it should render a button with the correct text', () => {
			const { getByTestId } = getRender({
				text: 'test',
			});
			const wrapper = getByTestId('iui-button');

			expect(wrapper.textContent).toContain('test');
		});
	});

	describe('When no text is provided', () => {
		it('Then it should renders a button with a default slot', () => {
			const { getByTestId } = getRender({
				radius: 'md',
			});
			const wrapper = getByTestId('iui-button');

			const slot = wrapper.querySelector('button__slot');

			expect(slot).toBeDefined();
		});
	});

	describe('When the disabled prop is provided', () => {
		it('Then it should renders a disabled button', () => {
			const { getByTestId } = getRender({
				disabled: true,
			});
			const wrapper = getByTestId('iui-button');

			expect(wrapper.getAttribute('disabled')).toBeDefined();
		});
	});
});
