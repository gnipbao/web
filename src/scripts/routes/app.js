import { Route, IndexRoute } from 'react-router';
import * as layouts from 'layouts';
import {
  about,
  rooms,
  profiles,
  playlists,
  tracks
} from 'pages';

export default (
  <Route path='/' component={layouts.app} requireAuth>
    <IndexRoute component={rooms.list} />

    <Route path='/rooms/:id' component={rooms.show} />
    <Route path='/rooms/:id/new' component={rooms.create} />
    <Route path='/rooms/:id/edit' component={rooms.edit} />

    <Route path='/profile' component={profiles.show} />
    <Route path='/profile/edit' component={profiles.edit} />

    <Route path='/users/:id' component={profiles.show} />

    <Route path='/playlists' component={playlists.list} />
    <Route path='/playlists/:id/edit' component={playlists.edit} />

    <Route path='/playlists/:id/tracks' component={tracks.list} />
    <Route path='/playlists/:id/tracks/:trackId/edit' component={tracks.edit} />

    <Route path='/tracks/:id' component={tracks.show} />

    <Route path='/about' component={about} />
  </Route>
);
