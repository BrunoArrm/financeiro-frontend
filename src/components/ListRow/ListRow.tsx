import './ListRow.scss';
import '../../styles/MainListDimensions.scss';
import ListRowProps from '../../types/ListRowProps';

const ListRow = ({  
                    agrupamento, valor, vencimento, contato, descricao, grupo, subGrupo,
                    parcelas, tParcelas, tipo, dBaixa, pago
                }: ListRowProps) => {

  return (
    <div className='mainPage-listField listRow'>
        <div className={`listField agrupamento`}>       {agrupamento}</div>
        <div className={`listField valor`}>             {valor}</div>
        <div className={`listField vencimento`}>        {vencimento}</div>
        <div className={`listField contato`}>           {contato}</div>
        <div className={`listField descricao`}>         {descricao}</div>
        <div className={`listField grupo`}>             {grupo}</div>
        <div className={`listField subgrupo`}>          {subGrupo}</div>
        <div className={`listField parcelas`}>          {parcelas}</div>
        <div className={`listField total-parcelas`}>    {tParcelas}</div>
        <div className={`listField data-baixa`}>        {dBaixa}</div>
        <div className={`listField pago`}>              {pago}</div>
        <div className={`listField atencao`}>.</div>
    </div>
  );
}

export default ListRow;