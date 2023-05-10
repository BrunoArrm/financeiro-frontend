import { useContext } from 'react';
import './Header.scss';
import { ListStyleContext } from '../../context/ListStyleContext';

const Header = () => {

  const listStyleContextValue = useContext(ListStyleContext);
  let listStyle: string | undefined;
  let setListStyle: ((value: string) => void) | undefined;
  if (listStyleContextValue) {
    ({ listStyle, setListStyle } = listStyleContextValue);
  }

  const handleChangeListStyle = () => {
    if (setListStyle) {
      listStyle === "simples" ? setListStyle("analitico") : setListStyle("simples");
      console.log("Alterou o tipo de lista para: ", listStyle);
    }
  }

  return (
    <header className='header'>
      <div className='btn-header header-filter' />
      <div className='btn-header header-add' />
      <div className={`btn-header listStyle-${listStyle}`}
            onClick={() => handleChangeListStyle()}
      />
    </header>
  );
}

export default Header;