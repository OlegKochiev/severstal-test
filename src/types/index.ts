import {ReactElement} from 'react';

export interface Request {
  url: string;
  date: Date;
}

export interface Props {
  children?: ReactElement | ReactElement[];
}
