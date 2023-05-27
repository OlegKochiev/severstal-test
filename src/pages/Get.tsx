import RequestPageTemplate from '../components/RequestPageTemplate/RequestPageTemplate';
import useRequest from '../hooks/useRequest';

export default function Get() {
  useRequest();
  return <RequestPageTemplate />;
}
