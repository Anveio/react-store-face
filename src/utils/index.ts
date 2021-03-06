import sampleData from './sampleData';

const formatPrice = (cents: number) => {
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

// tslint:disable-next-line:no-any
const rando = (arr: any[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

const getFunName = () => {
  const adjectives = [
    'adorable',
    'beautiful',
    'clean',
    'drab',
    'elegant',
    'fancy',
    'glamorous',
    'handsome',
    'long',
    'magnificent',
    'old-fashioned',
    'plain',
    'quaint',
    'sparkling',
    'ugliest',
    'unsightly',
    'angry',
    'bewildered',
    'clumsy',
    'defeated',
    'embarrassed',
    'fierce',
    'grumpy',
    'helpless',
    'itchy',
    'jealous',
    'lazy',
    'mysterious',
    'nervous',
    'obnoxious',
    'panicky',
    'repulsive',
    'scary',
    'thoughtless',
    'uptight',
    'worried'
  ];

  const nouns = [
    'women',
    'men',
    'children',
    'teeth',
    'feet',
    'people',
    'leaves',
    'mice',
    'geese',
    'halves',
    'knives',
    'wives',
    'lives',
    'elves',
    'loaves',
    'potatoes',
    'tomatoes',
    'cacti',
    'foci',
    'fungi',
    'nuclei',
    'syllabuses',
    'analyses',
    'diagnoses',
    'oases',
    'theses',
    'crises',
    'phenomena',
    'criteria',
    'data'
  ];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
};

/**
 * Converts a Map object into an array containing objects.
 * Each object has two properties. One is the actual item (the key of the map property).
 * The other is the quantity of the item (the value of the map property) 
 * @param input 
 */
const cartListFromMap = (input: Map<Item, number>): CartEntry<Item>[] => {
  return Array.from(input.keys()).map(item => {
    return {
      item: item,
      quantity: input.get(item) || 0
    };
  });
};

/**
 * Returns the total price of a CartEntry<Item>[].
 * @param input 
 */
const cartTotalPrice = (input: CartEntry<Item>[]): number => {
  const summation = (total: number, entry: CartEntry<Item>) => {
    return (total += entry.quantity * entry.item.price);
  };

  return input.reduce(summation, 0);
};

export {
  formatPrice,
  slugify,
  getFunName,
  sampleData,
  cartListFromMap,
  cartTotalPrice
};
