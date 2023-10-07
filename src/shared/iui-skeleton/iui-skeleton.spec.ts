import { render } from '@testing-library/vue';
import IuiSkeleton from './iui-skeleton.vue';

describe('Given IuiSkeleton component', () => {
	describe('When given the list distribution slot', () => {
		it('Then it should render the correct number of list items', () => {
			const { getByTestId } = render(IuiSkeleton, {
				props: {
					distribution: ['list'],
				},
				slots: {
					list: '<div />',
				},
			});
			const list = getByTestId('iui-skeleton__list');
			const listItem = list.querySelectorAll('.skeleton__list--item');
			expect(listItem).toHaveLength(3);
		});
	});

	describe('When given the table distribution slot', () => {
		it('Then it should render the correct number of table cells', () => {
			const { getByTestId } = render(IuiSkeleton, {
				props: {
					distribution: ['table'],
				},
				slots: {
					list: '<div />',
				},
			});
			const table = getByTestId('iui-skeleton__table');
			const tableItem = table.querySelectorAll('.skeleton__table--item');
			expect(tableItem).toHaveLength(9);
		});
	});

	describe('When given the title distribution slot', () => {
		it('Then it should display the correct number of slots', () => {
			const { queryAllByTestId } = render(IuiSkeleton, {
				props: {
					distribution: ['title', 'description', 'content', 'actions'],
				},
			});
			expect(queryAllByTestId('skeleton-title')).toBeTruthy();
			expect(queryAllByTestId('skeleton-description')).toBeTruthy();
			expect(queryAllByTestId('skeleton-content')).toBeTruthy();
			expect(queryAllByTestId('skeleton-actions')).toBeTruthy();
		});
	});
});
