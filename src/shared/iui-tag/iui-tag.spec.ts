import { render } from '@testing-library/vue';
import IuiTag from './iui-tag.vue';

describe('Given IuiTag component', () => {
	describe('When no variant prop is passed', () => {
		it('Then it should render the tag with the default variant', () => {
			const { getByTestId } = render(IuiTag, {
				props: {
					content: 'Default tag',
				},
			});

			const tag = getByTestId('iui-tag');

			expect(tag.getAttribute('class')).toContain('tag__default');
		});
	});

	describe('When the variant prop is passed', () => {
		it('Then it should render the tag with the correct variant', () => {
			const { getByTestId } = render(IuiTag, {
				props: {
					content: 'Primary tag',
					variant: 'primary',
				},
			});

			const tag = getByTestId('iui-tag');

			expect(tag.getAttribute('class')).toContain('tag__primary');
		});
	});

	describe('When the closable prop is passed', () => {
		it('Then it should render the tag with the closable icon', () => {
			const { getByTestId } = render(IuiTag, {
				props: {
					content: 'Secondary tag',
					closable: true,
				},
			});

			const icon = getByTestId('iui-tag__close');

			expect(icon).toBeTruthy();
		});
	});

	describe('When click on the close icon', () => {
		it('Then it should emit the close event', async () => {
			const { getByTestId, emitted } = render(IuiTag, {
				props: {
					content: 'Secondary tag',
					closable: true,
				},
			});

			const icon = getByTestId('iui-tag__close');
			await icon.click();

			expect(emitted().close).toBeTruthy();
		});
	});
});
