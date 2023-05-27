import {useLocation} from 'react-router-dom';
import {PATHS} from '../../constants';
import Button from '../Button/Button';
import useRequest from '../../hooks/useRequest';

import style from './style.module.css';

export default function RequestPageTemplate() {
  const {pathname} = useLocation();
  const {handleRequest} = useRequest();

  const title = PATHS.find((path) => path.href === pathname)?.title;

  return (
    <div>
      <h2 className={style.pageTitle}>{title} page</h2>
      <Button onClick={handleRequest}>Make request</Button>
    </div>
  );
}
