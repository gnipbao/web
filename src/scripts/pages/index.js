import notFound from './not_found';
import forbidden from './forbidden';

import signIn from './sign_in';
import about from './about';

import * as rooms from './rooms';
import * as profiles from './profiles';
import * as playlists from './playlists';
import * as tracks from './tracks';

import * as admin from './admin';

// TODO: use require.context

export default {
  notFound,
  forbidden,

  signIn,
  about,

  rooms,
  profiles,
  playlists,
  tracks,

  admin
}
