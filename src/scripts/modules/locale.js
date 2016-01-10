import { action, reducer } from 'lib/redux';
import session from 'lib/session';

export const setLocale = action('locale.set', (locale, messages) => {
  session.setLocale(locale);
  return { locale, messages };
});

const initialState = {
  locale: null,
  messages: null
};

export default reducer({
  [setLocale]: (state, { locale, messages }) => ({ locale, messages })
}, initialState);
