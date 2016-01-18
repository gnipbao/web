import { Route, IndexRoute } from 'react-router';

import * as layouts from 'layouts';
import { admin } from 'pages';

export default (
  <Route path='/admin' component={layouts.admin}
    requireAuth
    requireRoles={['moderator', 'admin', 'developer']}>

    <IndexRoute component={admin.dashboard} />

    <Route path='/admin/users' component={admin.users.list} />
    <Route path='/admin/users/:id' component={admin.users.show} />
    <Route path='/admin/users/:id/new' component={admin.users.create} />
    <Route path='/admin/users/:id/edit' component={admin.users.edit} />
  </Route>
);
