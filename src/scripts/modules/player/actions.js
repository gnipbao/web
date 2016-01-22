import { action } from 'lib/redux';

export const togglePlay = action('player.togglePlay', playing => ({ playing }));
export const stop = action('player.stop');
export const changeTrack = action('player.changeTrack', id => ({ id }));
export const updateTime = action('player.updateTime', offset => ({ offset }));
export const seek = action('player.seek', offset => ({ offset }));
