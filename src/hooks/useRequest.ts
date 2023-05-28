import {useContext} from 'react';
import {useLocation} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalContext';
import {makeRequest} from '../services/httpbin';
import {BASE_URL} from '../constants';

export default function useRequest() {
  const {addRequest} = useContext(GlobalContext);

  const {pathname} = useLocation();
  const method = pathname.replace(/[^A-Za-z]/g, '');
  const url = `${BASE_URL}${method}`;

  const handleRequest = async () => {
    const isSuccess = await makeRequest(url, method);
    const request = {
      url,
      date: new Date(),
    };
    if (isSuccess) {
      addRequest(request);
    }
  };

  return {handleRequest};
}
