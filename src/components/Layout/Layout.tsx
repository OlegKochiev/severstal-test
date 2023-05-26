import {ReactElement} from 'react';
import {GlobalContext, initialState} from '../../context/GlobalContext';

import style from './style.module.css';

interface Props {
  children: ReactElement | ReactElement[];
}

export default function Layout({children}: Props) {
  return (
    <GlobalContext.Provider value={initialState}>
      <div className={style.container}>{children}</div>
    </GlobalContext.Provider>
  );
}
