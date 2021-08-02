import Model from 'flarum/common/Model';
import User from 'flarum/common/models/User';

import registerWidget from '../common/registerWidget';

app.initializers.add('afrux/top-posters-widget', () => {
  User.prototype.prettyCommentCount = Model.attribute('afrux-top-posters-widget.prettyCommentCount');

  registerWidget(app);
});
