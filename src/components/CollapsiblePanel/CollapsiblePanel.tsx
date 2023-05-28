import {useContext, useState} from 'react';
import {GlobalContext} from '../../context/GlobalContext';

import style from './CollapsiblePanel.module.css';
import {WARNINGS} from '../../constants';

export default function CollapsibleBanel() {
  const [isOpen, setIsOpen] = useState(false);
  const {requests} = useContext(GlobalContext);

  const collapseContentStyles = `${style.collapseContent} ${isOpen ? style.collapseContentShow : ''}`;

  const handleCollapseOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.collapseContainer}>
      <div className={style.collapseHeader} onClick={handleCollapseOpen}>
        Requests panel
      </div>
      <div className={collapseContentStyles}>
        <div>
          {!requests.length ? (
            <h2>{WARNINGS.IS_EMPTY}</h2>
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
