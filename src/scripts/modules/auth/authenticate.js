import Qs from 'qs';
import jwtDecode from 'jwt-decode';

import openPopup from 'lib/utils/popup';
import * as session from 'lib/session';

export default function(provider, code, tab) {
  const name = !!tab ? '_blank' : provider;
  const query = code ? '?' + Qs.stringify({ invite_code: code }) : '';
  const url = `${settings.authRoot}/${provider}${query}`;
  const popup = openPopup(provider, url, name);

  return waitRedirect(provider, popup);
}

function waitRedirect(provider, popup) {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (!popup || popup.closed) {
        clearInterval(interval);

        if (!popup) reject({ error: 'Popup was blocked.' });
        if (popup.closed) reject({ error: 'Login has been cancelled.' });

        reject({ error: 'Error. Please, try again.' });
      } else {
        try {
          const params = Qs.parse(popup.location.search.slice(1));
          if (params.auth_token || params.error) popup.close();
          if (params.auth_token) {
            const token = params.auth_token;
            const data = jwtDecode(token);
            session.login(token);
            resolve({ token, data });
          } else if (params.error) {
            reject({ error: params.error });
          }
        } catch (err) {
          // console.error(err);
        }
      }
    }, 100);
  });
}
