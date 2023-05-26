import {createContext} from 'react';
import {Request} from '../types';

type InitialState = {
  requests: Request[];
};

export const initialState: InitialState = {
  requests: [],
};

export const GlobalContext = createContext(initialState);
