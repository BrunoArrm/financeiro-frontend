import './ListHeader.scss';
import '../../styles/MainListDimensions.scss';

const ListHeader = () => {
  return (
    <div className='mainPage-listField listHeader'>
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
        <div className={`listField acoes`}></div>
    </div>
  );
}

export default ListHeader;
