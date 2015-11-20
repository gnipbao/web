import React from 'react';

import Button from 'react-toolbox/lib/button';

const Footer = (props) => {
  return (
    <div>
      <Button raised primary icon='done-all' label='complete all' />
      <Button raised accent icon='delete' label='clear completed' />
    </div>
  );
};

export default Footer;
