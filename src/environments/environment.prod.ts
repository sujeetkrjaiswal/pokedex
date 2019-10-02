import { prefOptions } from './pref.config';

export const environment = {
  production: true,
  defaultListSize: 1000,
  pokemonApiSlug: 'https://pokeapi.co/api/v2/',
  prefOptions,
  userPrefKey: '__userPref',
  searchAllSynonyms: ['', 'all', '*'],
  validApiTypes: [
    'ability', 'berry', 'berry-firmness', 'berry-flavor',
    'characteristic', 'contest-effect', 'contest-type', 'egg-group', 'encounter-condition',
    'encounter-condition-value', 'encounter-method', 'evolution-chain', 'evolution-trigger',
    'gender', 'generation', 'growth-rate', 'item', 'item-attribute', 'item-category', 'item-fling-effect',
    'item-pocket', 'language', 'location', 'location-area', 'machine', 'move', 'move-ailment',
    'move-battle-style', 'move-category', 'move-damage-class', 'move-learn-method', 'move-target',
    'nature', 'pal-park-area', 'pokeathlon-stat', 'pokedex', 'pokemon', 'pokemon-color', 'pokemon-form',
    'pokemon-habitat', 'pokemon-shape', 'pokemon-species', 'region', 'stat', 'super-contest-effect',
    'type', 'version', 'version-group']
};
