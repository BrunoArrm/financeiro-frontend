import './ListHeader.scss';
import '../../styles/MainListDimensions.scss';
import { ListStyleContext } from '../../context/ListStyleContext';
import { useContext } from 'react';
import ListStyleContextType from '../../types/ListStyleContextType';

const ListHeader = () => {

  let estiloLista; // Variável que irá receber o estado do estilo da lista
  const listStyleContextValue = useContext(ListStyleContext); // Constante que recebe o contexto
  if (listStyleContextValue) { // Texta se o contexto é undefined
    const { listStyle }: ListStyleContextType = listStyleContextValue; //Caso o contexto esteja funcionando, extrai o estado necessário
    estiloLista = listStyle;
  }

  return (
    <div className={`mainPage-listField listHeader listHeader-${estiloLista}`}>

      <div className={`listField agrupamento`}>       ID</div>
      <div className={`listField valor`}>             VALOR</div>
      <div className={`listField vencimento`}>        VENCIMENTO</div>
      <div className={`listField contato`}>           CONTATO</div>
      <div className={`listField descricao`}>         DESCRIÇÃO</div>
      <div className={`listField grupo`}>             GRUPO</div>
      <div className={`listField subgrupo`}>          SUBGRUPO</div>
      <div className={`listField parcelas`}>          P</div>
      <div className={`listField total-parcelas`}>    TP</div>
      <div className={`listField data-baixa`}>        BAIXA</div>
      <div className={`listField pago`}>              PAGO</div>
      <div className={`listField status`}></div>

    </div>
  );
}

export default ListHeader;
