import { render } from '@testing-library/vue';
import IuiProgress from './iui-progress.vue';

const getWrapper = ({ ...props }) =>
	render(IuiProgress, {
		props,
	});

describe('Given IuiProgress component', () => {
	describe('When given a value and displayValue as true', () => {
		it('Then it should render the correct value as a percentage', () => {
			const { getByTestId } = getWrapper({
				value: 50,
				displayValue: true,
			});
			const wrapper = getByTestId('iui-progress__value--inner');
			expect(wrapper.innerHTML).toBe('50%');
		});
	});
	it('displays an indeterminate progress bar when given the indeterminate prop', () => {
		const { getByTestId } = getWrapper({
			indeterminate: true,
		});
		const indeterminateWrapper = getByTestId('iui-progress__indeterminate');
		expect(indeterminateWrapper).toBeTruthy();
	});
});
