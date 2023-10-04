import { render } from '@testing-library/vue';
import IuiAvatar from './iui-avatar.vue';
import Icon from '@/shared/iui-icon/iui-icon.vue';

const getRender = ({ ...props }) =>
	render(IuiAvatar, {
		props,
	});

describe('Given iui-avatar component', () => {
	describe('When image, text or icon prop are provided', () => {
		it('Then it should render an image', async () => {
			const { getByAltText } = getRender({
				image: 'https://example.com/avatar.jpg',
			});

			const image = getByAltText('Avatar image');
			expect(image.getAttribute('src')).toBe('https://example.com/avatar.jpg');
		});

		it('Then it should render a text avatar', async () => {
			const { getByTestId } = getRender({
				text: 'JD',
			});
			const span = getByTestId('iui-avatar__text');

			expect(span.innerHTML).toBe('JD');
		});

		it('Then it should render a icon', async () => {
			getRender({
				icon: 'github',
			});
			expect(Icon).toBeDefined();
		});
	});
});
describe('When a size prop is passed', () => {
	it('Then it should render an avatar with the correct size based on the size prop', async () => {
		const { container } = getRender({
			size: 40,
		});

		const image = container.querySelector('img');
		if (!image) return;

		expect(image.getAttribute('width')).toBe(80);
		expect(image.getAttribute('height')).toBe(80);
	});
});
