export const componentsRoutes = [
	// **** UI **** //
	{
		component: () => import('@/views/UI/buttonView.vue'),
		name: 'iui:button',
		path: 'button',
	},
	{
		component: () => import('@/views/UI/iconView.vue'),
		name: 'iui:icon',
		path: 'icon',
	},
	{
		component: () => import('@/views/UI/badgeView.vue'),
		name: 'iui:badge',
		path: 'badge',
	},
	{
		component: () => import('@/views/UI/avatarView.vue'),
		name: 'iui:avatar',
		path: 'avatar',
	},
	{
		component: () => import('@/views/UI/dividerView.vue'),
		name: 'iui:divider',
		path: 'divider',
	},
	{
		component: () => import('@/views/UI/tagView.vue'),
		name: 'iui:tag',
		path: 'tag',
	},
	{
		component: () => import('@/views/UI/alertView.vue'),
		name: 'iui:alert',
		path: 'alert',
	},
	{
		component: () => import('@/views/UI/progressView.vue'),
		name: 'iui:progress',
		path: 'progress',
	},
	{
		component: () => import('@/views/UI/skeletonView.vue'),
		name: 'iui:skeleton',
		path: 'skeleton',
	},
	{
		component: () => import('@/views/UI/tooltipView.vue'),
		name: 'iui:tooltip',
		path: 'tooltip',
	},
	{
		component: () => import('@/views/UI/popoverView.vue'),
		name: 'iui:popover',
		path: 'popover',
	},
	{
		component: () => import('@/views/UI/collapseView.vue'),
		name: 'iui:collapse',
		path: 'collapse',
	},
	{
		component: () => import('@/views/UI/imageView.vue'),
		name: 'iui:image',
		path: 'image',
	},
	{
		component: () => import('@/views/UI/carrouselView.vue'),
		name: 'iui:carrousel',
		path: 'carrousel',
	},
	{
		component: () => import('@/views/UI/backtopView.vue'),
		name: 'iui:backtop',
		path: 'backtop',
	},
	{
		component: () => import('@/views/UI/infinitescrollView.vue'),
		name: 'iui:infinite-scroll',
		path: 'infinite-scroll',
	},
	{
		component: () => import('@/views/UI/lazyloadView.vue'),
		name: 'iui:lazyload',
		path: 'lazyload',
	},
	{
		component: () => import('@/views/UI/stickyView.vue'),
		name: 'iui:sticky',
		path: 'sticky',
	},
	{
		component: () => import('@/views/UI/affixView.vue'),
		name: 'iui:affix',
		path: 'affix',
	},
	// **** NAVIGATION **** //
	{
		component: () => import('@/views/NAVIGATION/drawerView.vue'),
		name: 'iui:drawer',
		path: 'drawer',
	},
	{
		component: () => import('@/views/NAVIGATION/navbarView.vue'),
		name: 'iui:navbar',
		path: 'navbar',
	},
	{
		component: () => import('@/views/NAVIGATION/sidebarView.vue'),
		name: 'iui:sidebar',
		path: 'sidebar',
	},
	{
		component: () => import('@/views/NAVIGATION/menuView.vue'),
		name: 'iui:menu',
		path: 'menu',
	},
	{
		component: () => import('@/views/NAVIGATION/breadcrumbView.vue'),
		name: 'iui:breadcrumb',
		path: 'breadcrumb',
	},
	{
		component: () => import('@/views/NAVIGATION/paginationView.vue'),
		name: 'iui:pagination',
		path: 'pagination',
	},
	{
		component: () => import('@/views/NAVIGATION/tabsView.vue'),
		name: 'iui:tabs',
		path: 'tabs',
	},
	{
		component: () => import('@/views/NAVIGATION/stepsView.vue'),
		name: 'iui:steps',
		path: 'steps',
	},
	{
		component: () => import('@/views/NAVIGATION/timelineView.vue'),
		name: 'iui:timeline',
		path: 'timeline',
	},
	// **** FORM **** //
	{
		component: () => import('@/views/FORM/inputView.vue'),
		name: 'iui:input',
		path: 'input',
	},
	{
		component: () => import('@/views/FORM/textareaView.vue'),
		name: 'iui:textarea',
		path: 'textarea',
	},
	{
		component: () => import('@/views/FORM/radioView.vue'),
		name: 'iui:radio',
		path: 'radio',
	},
	{
		component: () => import('@/views/FORM/checkboxView.vue'),
		name: 'iui:checkbox',
		path: 'checkbox',
	},
	{
		component: () => import('@/views/FORM/switchView.vue'),
		name: 'iui:switch',
		path: 'switch',
	},
	{
		component: () => import('@/views/FORM/selectView.vue'),
		name: 'iui:select',
		path: 'select',
	},
	{
		component: () => import('@/views/FORM/sliderView.vue'),
		name: 'iui:slider',
		path: 'slider',
	},
	{
		component: () => import('@/views/FORM/datepickerView.vue'),
		name: 'iui:date-picker',
		path: 'date-picker',
	},
	{
		component: () => import('@/views/FORM/timepickerView.vue'),
		name: 'iui:time-picker',
		path: 'time-picker',
	},
	{
		component: () => import('@/views/FORM/datetimepickerView.vue'),
		name: 'iui:date-time-picker',
		path: 'date-time-picker',
	},
	{
		component: () => import('@/views/FORM/uploadView.vue'),
		name: 'iui:upload',
		path: 'upload',
	},
	{
		component: () => import('@/views/FORM/rateView.vue'),
		name: 'iui:rate',
		path: 'rate',
	},
	{
		component: () => import('@/views/FORM/colorpickerView.vue'),
		name: 'iui:color-picker',
		path: 'color-picker',
	},
	{
		component: () => import('@/views/FORM/transferView.vue'),
		name: 'iui:transfer',
		path: 'transfer',
	},
	{
		component: () => import('@/views/FORM/formView.vue'),
		name: 'iui:form',
		path: 'form',
	},
] as const;

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
	? ElementType
	: never;

export type ComponentsRouteName = ElementType<typeof componentsRoutes>['name'];
