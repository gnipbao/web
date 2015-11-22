import React, { PropTypes } from 'react';
import Button from 'react-toolbox/lib/button';

import { ActionCreators as undoActions } from 'redux-undo';

import style from './style';

const Component = ({ undo, redo }) => {
  return (
    <div className={style.root}>
      <Button floating mini icon='undo' onClick={undo} />
      <Button floating mini icon='redo' onClick={redo} />
    </div>
  );
};

Component.propTypes = {
  undo: PropTypes.func.isRequired,
  redo: PropTypes.func.isRequired
};

export default Component;
