import { RouteRecordRaw } from "vue-router";

export const componentsRoutes: RouteRecordRaw[] = [
  {
    component: () => import("@/views/UI/button.vue"),
    name: "iui:button",
    path: "button",
  },
  {
    component: () => import("@/views/UI/icon.vue"),
    name: "iui:icon",
    path: "icon",
  },
  {
    component: () => import("@/views/UI/badge.vue"),
    name: "iui:badge",
    path: "badge",
  },
  {
    component: () => import("@/views/UI/avatar.vue"),
    name: "iui:avatar",
    path: "avatar",
  },
  {
    component: () => import("@/views/UI/divider.vue"),
    name: "iui:divider",
    path: "divider",
  },
  {
    component: () => import("@/views/UI/tag.vue"),
    name: "iui:tag",
    path: "tag",
  },
  {
    component: () => import("@/views/UI/alert.vue"),
    name: "iui:alert",
    path: "alert",
  },
  {
    component: () => import("@/views/UI/progress.vue"),
    name: "iui:progress",
    path: "progress",
  },
  {
    component: () => import("@/views/UI/skeleton.vue"),
    name: "iui:skeleton",
    path: "skeleton",
  },
  {
    component: () => import("@/views/UI/tooltip.vue"),
    name: "iui:tooltip",
    path: "tooltip",
  },
  {
    component: () => import("@/views/UI/popover.vue"),
    name: "iui:popover",
    path: "popover",
  },
  {
    component: () => import("@/views/UI/drawer.vue"),
    name: "iui:drawer",
    path: "drawer",
  },
  {
    component: () => import("@/views/UI/collapse.vue"),
    name: "iui:collapse",
    path: "collapse",
  },
  {
    component: () => import("@/views/UI/timeline.vue"),
    name: "iui:timeline",
    path: "timeline",
  },
  {
    component: () => import("@/views/UI/image.vue"),
    name: "iui:image",
    path: "image",
  },
  {
    component: () => import("@/views/UI/backtop.vue"),
    name: "iui:backtop",
    path: "backtop",
  },
  {
    component: () => import("@/views/UI/infinitescroll.vue"),
    name: "iui:infinite-scroll",
    path: "infinite-scroll",
  },
  {
    component: () => import("@/views/UI/lazyload.vue"),
    name: "iui:lazyload",
    path: "lazyload",
  },
  {
    component: () => import("@/views/UI/sticky.vue"),
    name: "iui:sticky",
    path: "sticky",
  },
  {
    component: () => import("@/views/UI/affix.vue"),
    name: "iui:affix",
    path: "affix",
  },
  {
    component: () => import("@/views/FORM/input.vue"),
    name: "iui:input",
    path: "input",
  },
  {
    component: () => import("@/views/FORM/textarea.vue"),
    name: "iui:textarea",
    path: "textarea",
  },
  {
    component: () => import("@/views/FORM/radio.vue"),
    name: "iui:radio",
    path: "radio",
  },
  {
    component: () => import("@/views/FORM/checkbox.vue"),
    name: "iui:checkbox",
    path: "checkbox",
  },
  {
    component: () => import("@/views/FORM/switch.vue"),
    name: "iui:switch",
    path: "switch",
  },
  {
    component: () => import("@/views/FORM/select.vue"),
    name: "iui:select",
    path: "select",
  },
  {
    component: () => import("@/views/FORM/slider.vue"),
    name: "iui:slider",
    path: "slider",
  },
  {
    component: () => import("@/views/FORM/datepicker.vue"),
    name: "iui:date-picker",
    path: "date-picker",
  },
  {
    component: () => import("@/views/FORM/timepicker.vue"),
    name: "iui:time-picker",
    path: "time-picker",
  },
  {
    component: () => import("@/views/FORM/datetimepicker.vue"),
    name: "iui:date-time-picker",
    path: "date-time-picker",
  },
  {
    component: () => import("@/views/FORM/upload.vue"),
    name: "iui:upload",
    path: "upload",
  },
  {
    component: () => import("@/views/FORM/rate.vue"),
    name: "iui:rate",
    path: "rate",
  },
  {
    component: () => import("@/views/FORM/colorpicker.vue"),
    name: "iui:color-picker",
    path: "color-picker",
  },
  {
    component: () => import("@/views/FORM/transfer.vue"),
    name: "iui:transfer",
    path: "transfer",
  },
  {
    component: () => import("@/views/FORM/form.vue"),
    name: "iui:form",
    path: "form",
  },
];
