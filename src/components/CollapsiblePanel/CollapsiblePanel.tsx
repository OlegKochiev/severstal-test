import {useContext, useState} from 'react';
import {GlobalContext} from '../../context/RequestsContext';

import style from './CollapsiblePanel.module.css';
import {WARNINGS} from '../../constants';
import CollapsibleHeader from './CollapsibleHeader/CollapsibleHeader';

export default function CollapsibleBanel() {
  const [isOpen, setIsOpen] = useState(true);
  const {requests} = useContext(GlobalContext);

  const collapseContentStyles = `${style.collapseContent} ${isOpen ? style.collapseContentShow : ''}`;

  const handleCollapseOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.collapseContainer}>
      <div className={style.collapseHeader} onClick={handleCollapseOpen}>
        <CollapsibleHeader isOpen={isOpen} title="Requests panel" />
      </div>
      <div className={collapseContentStyles}>
        <div>
          {!requests.length ? (
            <h3>{WARNINGS.IS_EMPTY}</h3>
          ) : (
            requests.map((request, index) => (
              <p className={style.collapseRow} key={request.date.getMilliseconds()}>
                {index + 1} - url: {request.url}, date: {request.date.toString()}
              </p>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
