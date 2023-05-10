import { createContext, useState } from 'react';
import ListStyleContextProps from '../types/ListStyleContextProps';
import ListStyleContextType from '../types/ListStyleContextType';

export const ListStyleContext = createContext<ListStyleContextType | undefined>(undefined);

export const ListStyleProvider: React.FC<ListStyleContextProps> = ({ children }) => {
  const [listStyle, setListStyle] = useState("simples");

  return (
    <ListStyleContext.Provider value={{ listStyle, setListStyle }}>
      {children}
    </ListStyleContext.Provider>
  );
};
