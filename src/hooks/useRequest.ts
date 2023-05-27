import {useLocation} from 'react-router-dom';
import makeRequest from '../services';
import {BASE_URL} from '../constants';

export default function useRequest() {
  const {pathname} = useLocation();
  const method = pathname.replace(/[^A-Za-z]/g, '');
  const url = `${BASE_URL}${method}`;

  const handleRequest = async () => {
    const isSuccess = await makeRequest(url, method);
    console.log(isSuccess);
  };

  return {handleRequest};
}
