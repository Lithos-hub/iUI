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
        dot: false
      }
    ]
  },
  {
    type: "Color",
    description: `The <code>color</code> prop is used to set a color to the Badge. The default value is <code>white</code>.`,
    components_props: [
      {
        color: "red",
        icon: "chevron"
      },
      {
        color: "green",
        icon: "shoping-cart"
      },
      {
        color: "blue",
        icon: "sun"
      },
      {
        color: "yellow",
        icon: "heart"
      },
      {
        color: "pink",
        icon: "eye"
      },
      {
        color: "purple",
        icon: "student"
      },
      {
        color: "orange",
        icon: "layers"
      },
      {
        color: "brown",
        icon: "layout"
      },
      {
        color: "black",
        icon: "like"
      },
      {
        color: "gray",
        icon: "bulb"
      },
    ]
  },
]