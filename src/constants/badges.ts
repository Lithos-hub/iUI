import { Badge } from "@/interfaces";

interface DotComponent {
  description: string;
  components_props: Badge[];
  type: string;
}

export const BADGES_SUMMARY: Badge[] = [
  {
    icon: 'chevron',
    badgeColor: 'red'
  },
  {
    icon: 'shoping-cart',
    badgeColor: 'green',
    content: '8'
  },
  {
    icon: 'sun',
    badgeColor: 'blue'
  },
  { 
    icon: 'heart',
    dot: true,
    badgeColor: 'yellow'
  },
  { 
    icon: 'eye',
    content: 123,
    badgeColor: 'pink'
  },
  { 
    icon: 'student',
    badgeColor: 'rose'
  },
  { 
    icon: 'layers',
    badgeColor: 'purple'
  },
  { 
    icon: 'layout',
    content: 123,
    badgeColor: 'brown'
  },
  { 
    icon: 'like',
    content: 7,
    badgeColor: 'black'
  },
  { 
    icon: 'bulb',
    dot: true,
    badgeColor: 'orange'
  },
];

export const BADGES_VIEW: DotComponent[] = [
  {
    type: "Dot",
    description: `The <code>dot</code> prop is used to set a dot to the Badge. The default value is <code>false</code>.`,
    components_props: [
      {
        icon: "shoping-cart",
        dot: true
      },
      {
        icon: "sun",
        dot: false,
      }
    ]
  },
  {
    type: "Color",
    description: `The <code>color</code> prop is used to set a color to the Badge. The default value is <code>white</code>.`,
    components_props: [
      {
        badgeColor: "red",
        icon: "chevron"
      },
      {
        badgeColor: "green",
        icon: "shoping-cart"
      },
      {
        badgeColor: "blue",
        icon: "sun"
      },
      {
        badgeColor: "yellow",
        icon: "heart"
      },
      {
        badgeColor: "pink",
        icon: "eye"
      },
      {
        badgeColor: "purple",
        icon: "student"
      },
      {
        badgeColor: "orange",
        icon: "layers"
      },
      {
        badgeColor: "brown",
        icon: "layout"
      },
      {
        badgeColor: "black",
        icon: "like"
      },
      {
        badgeColor: "grey",
        icon: "bulb"
      },
    ]
  },
  {
    type: "Content",
    description: `The <code>content</code> prop is used to set a content to the Badge. The default value is <code>''</code>. If the <code>dot</code> prop is set to <code>true</code>, the <code>content</code> prop is ignored. If the <code>content</code> prop is above <code>9</code>, the Badge will display <code>9+</code>.`,
    components_props: [
      {
        icon: "shoping-cart",
        content: 8
      },
      {
        icon: "sun",
        content: 123
      },
      {
        icon: "heart",
        content: 123
      },
      {
        icon: "eye",
        content: 123
      },
      {
        icon: "layout",
        content: 123
      },
      {
        icon: "like",
        content: 7
      },
    ]
  }
]