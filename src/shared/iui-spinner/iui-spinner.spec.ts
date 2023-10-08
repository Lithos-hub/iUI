import { render } from '@testing-library/vue';
import IuiSpinner from './iui-spinner.vue';
import { getTailwindColor, hexToRgb } from '@/utils';
import { RGB } from '@/utils/color.interfaces';

describe('Given iui-spinner component', () => {
	describe('When given the displayText prop as true', () => {
		it('Then it should display the loading text', () => {
			const { getByText } = render(IuiSpinner, {
				props: {
					displayText: true,
				},
			});
			expect(getByText('Loading...')).toBeTruthy();
		});
	});

	describe('When given the displayText prop as false', () => {
		it('Then it should not display the loading text', () => {
			const { queryByText } = render(IuiSpinner, {
				props: {
					displayText: false,
				},
			});
			expect(queryByText('Loading...')).toBeFalsy();
		});
	});
	describe('When given the color prop', () => {
		it('Then it should display the correct color', () => {
			const { getByTestId } = render(IuiSpinner, {
				props: {
					color: 'red',
				},
			});
			const expectedToBorder = `4px solid ${getTailwindColor('red')}`;
			expect(getByTestId('iui-spinner').style.borderTop).toBe(expectedToBorder);
		});
	});

	describe('When given the textColor prop and the displayText prop as true', () => {
		it('Spinner displays correct text color', () => {
			const { getByTestId } = render(IuiSpinner, {
				props: {
					textColor: 'blue',
					displayText: true,
				},
			});
			const expectedTailwindColor = getTailwindColor('blue');
			const { r, g, b } = hexToRgb(expectedTailwindColor) as RGB;
			expect(getByTestId('iui-spinner__text').style.color).toBe(`rgb(${r}, ${g}, ${b})`);
		});
	});
});
