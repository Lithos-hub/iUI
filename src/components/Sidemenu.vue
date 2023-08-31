<template>
  <nav
    class="sticky top-0 left-0 h-full text-primary duration-200 z-10 w-[250px] mx-auto"
  >
    <div class="fadeIn">
      <ul v-for="{ category, components } of menuItems">
        <Accordion :items="components" :title="category" color="blue" />
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { Accordion } from "@/components";

interface MenuItem {
  category: string;
  components: {
    text: string;
    to: {
      name: string;
    };
  }[];
}

const menuItems: MenuItem[] = [
  {
    category: "UI",
    components: [
      {
        text: "Button",
        to: {
          name: "iui:button",
        },
      },
      {
        text: "Icon",
        to: {
          name: "iui:icon",
        },
      },
      {
        text: "Badge",
        to: {
          name: "iui:badge",
        },
      },
      {
        text: "Avatar",
        to: {
          name: "iui:avatar",
        },
      },
      {
        text: "Divider",
        to: {
          name: "iui:divider",
        },
      },
      {
        text: "Tag",
        to: {
          name: "iui:tag",
        },
      },
      {
        text: "Alert",
        to: {
          name: "iui:alert",
        },
      },
      {
        text: "Progress",
        to: {
          name: "iui:progress",
        },
      },
      {
        text: "Skeleton",
        to: {
          name: "iui:skeleton",
        },
      },
      {
        text: "Tooltip",
        to: {
          name: "iui:tooltip",
        },
      },
      {
        text: "Popover",
        to: {
          name: "iui:popover",
        },
      },
      {
        text: "Drawer",
        to: {
          name: "iui:drawer",
        },
      },
      {
        text: "Collapse",
        to: {
          name: "iui:collapse",
        },
      },
      {
        text: "Timeline",
        to: {
          name: "iui:timeline",
        },
      },
      {
        text: "Image",
        to: {
          name: "iui:image",
        },
      },
      {
        text: "Backtop",
        to: {
          name: "iui:backtop",
        },
      },
      {
        text: "InfiniteScroll",
        to: {
          name: "iui:infinite-scroll",
        },
      },
      {
        text: "Lazyload",
        to: {
          name: "iui:lazyload",
        },
      },
      {
        text: "Sticky",
        to: {
          name: "iui:sticky",
        },
      },
      {
        text: "Affix",
        to: {
          name: "iui:affix",
        },
      },
    ],
  },
  {
    category: "form",
    components: [
      {
        text: "Input",
        to: {
          name: "iui:input",
        },
      },
      {
        text: "Textarea",
        to: {
          name: "iui:textarea",
        },
      },
      {
        text: "Radio",
        to: {
          name: "iui:radio",
        },
      },
      {
        text: "Checkbox",
        to: {
          name: "iui:checkbox",
        },
      },
      {
        text: "Switch",
        to: {
          name: "iui:switch",
        },
      },
      {
        text: "Select",
        to: {
          name: "iui:select",
        },
      },
      {
        text: "Slider",
        to: {
          name: "iui:slider",
        },
      },
      {
        text: "DatePicker",
        to: {
          name: "iui:date-picker",
        },
      },
      {
        text: "TimePicker",
        to: {
          name: "iui:time-picker",
        },
      },
      {
        text: "DateTimePicker",
        to: {
          name: "iui:date-time-picker",
        },
      },
      {
        text: "Upload",
        to: {
          name: "iui:upload",
        },
      },
      {
        text: "Rate",
        to: {
          name: "iui:rate",
        },
      },
      {
        text: "ColorPicker",
        to: {
          name: "iui:color-picker",
        },
      },
      {
        text: "Transfer",
        to: {
          name: "iui:transfer",
        },
      },
      {
        text: "Form",
        to: {
          name: "iui:form",
        },
      },
    ],
  },
];
</script>

<style lang="scss" scoped></style>
