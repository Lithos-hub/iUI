import { render } from '@testing-library/vue';
import IuiDivider from './iui-divider.vue';
import { getTailwindColor } from '@/utils';

const getWrapper = ({ ...props }) =>
	render(IuiDivider, {
		props,
	});

describe('IuiDivider', () => {
	it('renders a horizontal divider by default', () => {
		const { getByTestId } = getWrapper({});
		const wrapper = getByTestId('iui-divider');
		expect(wrapper.getAttribute('class')).toBe('divider w-full h-[1px]');
	});

	it('renders a vertical divider if the orientation prop is set to "vertical"', () => {
		const { getByTestId } = getWrapper({
			orientation: 'vertical',
		});

		const wrapper = getByTestId('iui-divider');

		expect(wrapper.getAttribute('class')).toBe(
			'divider absolute top-0 h-full w-[1px] border-r border-b-none',
		);
	});

	it('renders a solid divider by default', () => {
		const { getByTestId } = getWrapper({});
		const wrapper = getByTestId('iui-divider');

		expect(wrapper.getAttribute('style')).toBe('border-bottom: 1px solid #fff;');
	});

	it('renders a dashed divider if the variant prop is set to "dashed"', () => {
		const { getByTestId } = getWrapper({
			variant: 'dashed',
		});
		const wrapper = getByTestId('iui-divider');

		expect(wrapper.getAttribute('style')).toBe('border-bottom: 1px dashed #fff;');
	});

	it('renders a dotted divider if the variant prop is set to "dotted"', () => {
		const { getByTestId } = getWrapper({
			variant: 'dotted',
		});
		const wrapper = getByTestId('iui-divider');

		expect(wrapper.getAttribute('style')).toBe('border-bottom: 1px dotted #fff;');
	});

	it('renders a divider with the correct color', () => {
		const { getByTestId } = getWrapper({
			color: 'red',
		});
		const wrapper = getByTestId('iui-divider');

		const expectedColor = getTailwindColor('red');

		expect(wrapper.getAttribute('style')).toBe(`border-bottom: 1px solid ${expectedColor};`);
	});

	it('renders a divider with the "light" mood if the mood prop is set to "light"', () => {
		const { getByTestId } = getWrapper({
			mood: 'light',
		});

		const wrapper = getByTestId('iui-divider');

		expect(wrapper.getAttribute('class')).toContain('divider__light');
	});

	it('renders a divider with the "neon" mood if the mood prop is set to "neon"', () => {
		const { getByTestId } = getWrapper({
			mood: 'neon',
		});

		const wrapper = getByTestId('iui-divider');

		expect(wrapper.getAttribute('class')).toContain('divider__neon');
	});

	it('renders a divider with the "synth" mood if the mood prop is set to "synth"', () => {
		const { getByTestId } = getWrapper({
			mood: 'synth',
		});

		const wrapper = getByTestId('iui-divider');

		expect(wrapper.getAttribute('class')).toContain('divider__synth');
	});

	it('renders a divider with the "saw" mood if the mood prop is set to "saw"', () => {
		const { getByTestId } = getWrapper({
			mood: 'saw',
		});

		const wrapper = getByTestId('iui-divider');

		expect(wrapper.getAttribute('class')).toContain('divider__saw');
	});
});
