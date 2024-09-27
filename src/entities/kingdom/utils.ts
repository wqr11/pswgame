import { KingdomType } from './types';
import { ResourceType } from '../resources-pool';

export const kingdomToResource: {
  [kingdomType in KingdomType]: ResourceType;
} = {
  grower: 'food',
  power: 'energy',
  trader: 'crypto',
  miner: 'crypto',
};
