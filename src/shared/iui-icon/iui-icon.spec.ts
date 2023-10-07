import { shallowMount } from '@vue/test-utils';
import { render } from '@testing-library/vue';
import IuiIcon from './iui-icon.vue';
import { getTailwindColor } from '@/utils';
import { Icon } from './iui-icon.interfaces';

const getWrapper = ({ ...props }) =>
	render(IuiIcon, {
		props,
	});

const getShallowWrapper = (props: Icon) =>
	shallowMount(IuiIcon, {
		props,
	});

describe('Given IuiIcon component', () => {
	describe('When no color prop is provided', () => {
		it('Then it should render the default color', () => {
			const { getByTestId } = getWrapper({
				icon: 'github',
			});
			const wrapper = getByTestId('iui-icon');
			const innerHTML = wrapper.innerHTML;
			const expectedColor = getTailwindColor('white');

			expect(innerHTML).toContain(expectedColor);
		});
	});

	describe('When color prop is provided', () => {
		it('Then it should render the provided color', () => {
			const { getByTestId } = getWrapper({
				icon: 'github',
				color: 'red',
			});
			const wrapper = getByTestId('iui-icon');
			const innerHTML = wrapper.innerHTML;
			const expectedColor = getTailwindColor('red');

			expect(innerHTML).toContain(expectedColor);
		});
	});

	describe('When icon prop is provided', () => {
		it('Then it should render the provided icon', () => {
			const wrapper = getShallowWrapper({
				icon: 'github',
			});
			expect(wrapper.vm.$props.icon).toBe('github');
		});
	});
});
