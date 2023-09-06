import { Avatar } from "@/interfaces";

interface AvatarComponent {
  description: string;
  components_props: Avatar[];
  type: string;
}

export const AVATARS_SUMMARY: Avatar[] = [
  {
    icon: "chevron",
  },
  {
    image: "/dog.jpg",
  },
  {
    color: "red",
    text: "CS",
  },
  {
    color: "blue",
    icon: "shoping-cart",
  },
];

export const AVATARS_VIEW: AvatarComponent[] = [
  {
    type: "Icon",
    description: `The <code>icon</code> prop is used to set an icon to the Badge. The default value is <code>undefined</code>.`,
    components_props: [
      {
        icon: "chevron",
      },
      {
        icon: "shoping-cart",
      },
      {
        icon: "sun",
      },
      {
        icon: "heart",
      },
      {
        icon: "eye",
      },
      {
        icon: "student",
      },
      {
        icon: "layers",
      },
      {
        icon: "layout",
      },
      {
        icon: "like",
      },
      {
        icon: "bulb",
      },
    ],
  },
  {
    type: "Image",
    description: `The <code>image</code> prop is used to set an image to the Badge. The default value is <code>undefined</code>.`,
    components_props: [
      {
        image: "/dog.jpg",
      },
    ],
  },
  {
    type: "Color",
    description: `The <code>color</code> prop is used to set a color to the Badge. The default value is <code>white</code>.`,
    components_props: [
      {
        color: "red",
        icon: "chevron",
      },
      {
        color: "green",
        icon: "shoping-cart",
      },
      {
        color: "blue",
        icon: "sun",
      },
      {
        color: "yellow",
        icon: "heart",
      },
      {
        color: "pink",
        icon: "eye",
      },
      {
        color: "purple",
        icon: "student",
      },
      {
        color: "orange",
        icon: "layers",
      },
      {
        color: "brown",
        icon: "layout",
      },
      {
        color: "grey",
        icon: "like",
      },
      {
        color: "teal",
        icon: "bulb",
      },
    ],
  },
  {
    type: "Text",
    description: `The <code>text</code> prop is used to set a text to the Badge. The default value is <code>undefined</code>.`,
    components_props: [
      {
        text: "CS",
        color: "red",
      },
      {
        text: "CS",
        color: "green",
      },
      {
        text: "CS",
        color: "blue",
      },
      {
        text: "CS",
        color: "yellow",
      },
      {
        text: "CS",
        color: "pink",
      },
      {
        text: "CS",
        color: "purple",
      },
      {
        text: "CS",
        color: "orange",
      },
      {
        text: "CS",
        color: "brown",
      },
      {
        text: "CS",
        color: "grey",
      },
      {
        text: "CS",
        color: "teal",
      },
    ],
  },
  {
    type: "Size",
    description: `The <code>size</code> prop is used to set a size to the Badge with a numeric value (number or string). The default value is <code>50</code> and the maximum is <code>80</code>.`,
    components_props: [
      {
        size: 10,
        image: "/dog.jpg",
      },
      {
        size: 20,
        image: "/dog.jpg",
      },
      {
        size: 30,
        image: "/dog.jpg",
      },
      {
        size: 40,
        image: "/dog.jpg",
      },
      {
        size: 50,
        image: "/dog.jpg",
      },
      {
        size: 60,
        image: "/dog.jpg",
      },
      {
        size: 70,
        image: "/dog.jpg",
      },
      {
        size: 80,
        image: "/dog.jpg",
      },
    ],
  },
];
