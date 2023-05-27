import {useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext';

export default function Home() {
  const {requests} = useContext(GlobalContext);
  console.log(requests);

  return <div>Home</div>;
}
