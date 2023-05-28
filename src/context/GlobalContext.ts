import {createContext} from 'react';
import {Request} from '../types';

type InitialState = {
  requests: Request[];
  addRequest: (request: Request) => void;
};

export const initialState: InitialState = {
  requests: [],
  addRequest: () => {},
};

export const GlobalContext = createContext(initialState);
