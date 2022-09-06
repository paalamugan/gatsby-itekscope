export const HERO_LISTS = [
  {
    id: "vector-art",
    title: "Vector Arteork",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima excepturi nam
    molestias iusto magni natus quia dicta culpa quasi voluptatem harum, illum modi
    tempora numquam.`,
    src: "vector-art.jpg",
  },
  {
    id: "embroidery-digitizing",
    title: "Embroidery Digitizing",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima excepturi nam
    molestias iusto magni natus quia dicta culpa quasi voluptatem harum, illum modi
    tempora numquam.`,
    src: "embroidery-digitizing.jpg",
  },
  {
    id: "website-design",
    title: "Website Design",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima excepturi nam
    molestias iusto magni natus quia dicta culpa quasi voluptatem harum, illum modi
    tempora numquam.`,
    src: "website-design.jpg",
  },
  {
    id: "software-development",
    title: "Software Development",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima excepturi nam
    molestias iusto magni natus quia dicta culpa quasi voluptatem harum, illum modi
    tempora numquam.`,
    src: "software-development.jpg",
  },
] as const;

export const GALLERY_LISTS = [
  { id: "all", name: "All" } as const,
  ...HERO_LISTS.map(list => ({ id: list.id, name: list.title })),
];

export const GALLERY_LIMIT = 15;
