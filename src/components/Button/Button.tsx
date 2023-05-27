import {MouseEventHandler, ReactElement} from 'react';

import style from './style.module.css';

interface Props {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Button({children, onClick}: Props) {
  return (
    <button className={style.button} type="button" onClick={onClick}>
      {children}
    </button>
  );
}
