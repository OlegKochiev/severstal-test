import {Outlet} from 'react-router-dom';
import {GlobalContext, initialState} from '../../context/GlobalContext';

import style from './style.module.css';
export default function Layout() {
  return (
    <>
      <GlobalContext.Provider value={initialState}>
        <div className={style.container}>
          <Outlet />
        </div>
      </GlobalContext.Provider>
    </>
  );
}
