
import { BusinessLine, Avatar } from './types';

export const ASSETS = {
  LOGOS: {
    BLOCKAIDE: 'https://storage.googleapis.com/static.lumalabs.ai/v1/7f3f3f01-f2f6-4f6c-8f4d-4b8c6f7a8b9c/0.png', // Placeholder for BlockAide Logo
    CLOUD_CONTROL: 'https://storage.googleapis.com/static.lumalabs.ai/v1/9a8b7c6d-5e4f-3g2h-1i0j-k9l8m7n6o5p4/0.png', // Placeholder Cloud Control
    COLONIAL: 'https://storage.googleapis.com/static.lumalabs.ai/v1/a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6/0.png' // Placeholder Colonial
  },
  AVATARS: [
    {
      id: 'coloev',
      name: 'ColoEv',
      description: 'Your Colonial guide to futuristic finance.',
      imageUrl: 'https://picsum.photos/seed/coloev/400/400',
      businessContext: BusinessLine.COLONIAL_COIN
    },
    {
      id: 'maxev',
      name: 'MaxEv',
      description: 'Strategic architect for Cloud Control integrations.',
      imageUrl: 'https://picsum.photos/seed/maxev/400/400',
      businessContext: BusinessLine.CLOUD_CONTROL
    },
    {
      id: 'felton',
      name: 'Felton Muggs',
      description: 'Union organizer and Web3 builder advocate.',
      imageUrl: 'https://picsum.photos/seed/felton/400/400',
      businessContext: BusinessLine.BLOCKAIDE
    }
  ] as Avatar[]
};

export const PARTNERS = [
  { name: 'Clark Construction', logo: 'https://picsum.photos/seed/clark/100/50' },
  { name: 'Virginia Blockchain Council', logo: 'https://picsum.photos/seed/vbc/100/50' },
  { name: 'GBA', logo: 'https://picsum.photos/seed/gba/100/50' },
  { name: 'VA250', logo: 'https://picsum.photos/seed/va250/100/50' }
];
