import Button from 'react-toolbox/lib/button';
import style from './style';

export default ({ iterate, clear, randomize }) => {
  return (
    <div className={style.root}>
      <Button mini floating primary icon='cached' onClick={randomize} />
      <Button mini floating icon='delete' onClick={clear} />
      <Button floating accent icon='trending-flat' onClick={iterate} />
    </div>
  );
};
