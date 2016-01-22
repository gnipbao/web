import { createSelector as selector } from 'reselect';
import { denormalize } from 'selectors';

export const list = denormalize('playlists');
export const show = denormalize('playlists');
