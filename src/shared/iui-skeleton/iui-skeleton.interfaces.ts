export interface Skeleton {
    slots?: DistributionSlot[];
    distribution: DistributionSlot[];
}

export interface SkeletonSlots {
	title(): string,
	description(): string,
	content(): string,
	actions(): string,
	article(): string,
	avatar(): string,
	button(): string,
	card(): string,
	card(): string,
	chip(): string,
	['date-picker'](): string,
	['date-picker-options'](): string,
	['date-picker-days'](): string,
	divider(): string,
	heading(): string,
	image(): string,
	list(): string,
	['list-item-avatar'](): string,
	['list-item-two-line'](): string,
	['list-item-avatar-two-line'](): string,
	['list-item-three-line'](): string,
	['list-item-avatar-three-line'](): string,
	ossein(): string,
	paragraph(): string,
	sentences(): string,
	subtitle(): string,
	table(): string,
	['table-heading'](): string,
	['table-thead'](): string,
	['table-tbody'](): string,
	['table-tfoot'](): string,
	['table-row-divider'](): string,
	['table-row'](): string,
	['table-cell'](): string,
	text(): string,
}

export type DistributionSlot = keyof SkeletonSlots;
