import { createSelector as selector } from 'reselect';
import { denormalize } from './base';

export const list = denormalize('playlists');
export const show = denormalize('playlists');
