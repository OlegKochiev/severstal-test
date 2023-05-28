import {useState} from 'react';
import {GlobalContext} from '../../context/RequestsContext';
import {Props, Request} from '../../types';

import style from './style.module.css';

export default function Layout({children}: Props) {
  const [requests, setRequests] = useState<Request[]>([]);

  const addRequest = (request: Request) => {
    setRequests((prevRequests) => [...prevRequests, request]);
  };

  return (
    <GlobalContext.Provider value={{requests, addRequest}}>
      <div className={style.container}>{children}</div>
    </GlobalContext.Provider>
  );
}
