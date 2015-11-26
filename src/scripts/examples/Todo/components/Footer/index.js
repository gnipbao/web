import Button from 'react-toolbox/lib/button';

import style from './style';

const Footer = (props) => {
  return (
    <div className={style.root}>
      <Button raised primary icon='done-all' label='complete all' />
      <Button raised accent icon='delete' label='clear completed' />
    </div>
  );
};

export default Footer;
