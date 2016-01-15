import css from 'react-css-modules';

import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

import style from './style';

export const Invites = (props) => {
  return (
    <List selectable ripple>
      <ListSubHeader caption='Invites' />
      <ListItem
        avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
        caption='Dr. Manhattan'
        legend="Jonathan 'Jon' Osterman"
        rightIcon='favorite'
      />
      <ListItem
        avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
        caption='Ozymandias'
        legend='Adrian Veidt'
        rightIcon='favorite_border'
      />
      <ListItem
        avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
        caption='Rorschach'
        legend='Walter Joseph Kovacs'
        rightIcon='favorite_border'
      />
    </List>
  );
}

export default css(Invites, style);
