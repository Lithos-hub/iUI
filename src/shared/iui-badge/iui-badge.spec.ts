import { render } from '@testing-library/vue';
import IuiBadge from './iui-badge.vue';

const getRender = ({ ...props }) =>
	render(IuiBadge, {
		props,
	});

describe('Given IuiBadge component', () => {
	describe('When the color prop is provided', () => {
		it('Then it should render a badge with the correct color', () => {
			const { getByTestId } = getRender({
				color: 'red',
			});

			const innerBadge = getByTestId('iui-badge__inner');

			expect(innerBadge.style.background).toBe('rgb(239, 68, 68)');
		});
	});

	describe('When the content prop is provided', () => {
		it('Then it should render a badge with the correct content', () => {
			const { getByTestId } = getRender({
				content: '5',
			});

			const innerBadge = getByTestId('iui-badge__inner');

			expect(innerBadge.querySelector('small')?.innerHTML).toBe('5');
		});
	});
	describe('When the content prop is 10 or greater', () => {
		it('Then it should format the content to be 9+', () => {
			const { getByTestId } = getRender({
				content: 10,
			});

			const innerBadge = getByTestId('iui-badge__inner');

			expect(innerBadge.querySelector('small')?.innerHTML).toBe('9+');
		});
	});
	describe('When the dot prop is true', () => {
		it('Then it should render a dotted badge', () => {
			const { getByTestId } = getRender({
				dot: true,
			});

			const innerBadge = getByTestId('iui-badge__inner');

			expect(innerBadge.getAttribute('class')).toContain('badge__dot');
		});
	});
	describe('When the icon prop is provided', () => {
		it('Then it should render an icon', () => {
			const { getByTestId } = getRender({
				icon: 'github',
			});

			const icon = getByTestId('iui-badge__icon');

			expect(icon).toBeDefined();
		});
	});
});
