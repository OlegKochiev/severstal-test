import {useLocation} from 'react-router-dom';
import Button from '../Button/Button';
import useRequest from '../../hooks/useRequest';
import {Props} from '../../types';
import {PATHS} from '../../constants';

export default function RequestPageTemplate({children}: Props) {
  const {pathname} = useLocation();
  const {handleRequest} = useRequest();

  const title = PATHS.find((path) => path.href === pathname)?.title;

  return (
    <div>
      <h1 className="pageTitle">{title} page</h1>
      <Button onClick={handleRequest}>Make request</Button>
      {children}
    </div>
  );
}
