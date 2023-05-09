import { createContext, useState } from 'react';

interface ListStyleContextProps {
  children: React.ReactNode;
}

type ListStyleContextType = {
  listStyle: string;
  setListStyle: React.Dispatch<React.SetStateAction<string>>;
};

export const ListStyleContext = createContext<ListStyleContextType | undefined>(undefined);

export const ListStyleProvider: React.FC<ListStyleContextProps> = ({ children }) => {
  const [listStyle, setListStyle] = useState("simples");

  return (
    <ListStyleContext.Provider value={{ listStyle, setListStyle }}>
      {children}
    </ListStyleContext.Provider>
  );
};
