import { createSelector } from 'reselect';

/**
 * Current active Character
 */
export const activeCharSelector = state => state.charDetails.active;

/**
 * The list of the entire loaded Characters
 */
export const loadedCharsSelector = state => state.charDetails.loaded;

/**
 * Active Character infos
 */
export const activeCharInfosSelector = createSelector(
  activeCharSelector,
  (char) => {
    if (!char) {
      return null;
    }

    return {
      infos: [
        { name: 'Name:', value: char.name },
        { name: 'Status:', value: char.status },
        { name: 'Species:', value: char.species },
        { name: 'Type:', value: char.type },
        { name: 'Gender:', value: char.gender },
        { name: 'Origin:', value: char.origin.name },
        { name: 'Location:', value: char.location.name }
      ],
      image: char.image
    }
  },
);