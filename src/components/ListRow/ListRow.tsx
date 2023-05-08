import './ListRow.scss';
import '../../styles/MainListDimensions.scss';
import ListRowProps from '../../types/ListRowProps';
import { useNavigate } from 'react-router-dom';

const ListRow = ({  
                    id, agrupamento, valor, vencimento, contato, descricao, grupo, subgrupo,
                    parcela, tParcelas, tipo, dBaixa, pago
                }: ListRowProps) => {

  const navigate = useNavigate()
  
  // Aplica a classe adequada para estilização de acordo com o status
  let tituloIconeStatus = "";
  let tituloColorStatus = ""
  if ( pago !== null ) {
    tituloIconeStatus = "liquidado";
    tituloColorStatus = "corLiquidado"
  } else if ( pago === null && vencimento !== undefined && vencimento !== null && vencimento < new Date() ) {
    tituloIconeStatus = "atencao";
    tituloColorStatus = "corAtencao"
  } else {
    tituloIconeStatus = "aguardando";
    tituloColorStatus = "corAguardando"
  }

  const handleOpenTitle = () => {
    const url = '/titulo/' + id;
    window.open(url, '_blank');
  }

  return (
    <div  className={`mainPage-listField listRow ${tituloColorStatus}`} 
    onClick={() => handleOpenTitle() }>
      
        <div className={`listField agrupamento`}>       {agrupamento ? agrupamento : "-"}</div>
        <div className={`listField valor`}>             {valor ? valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : "."}</div>
        <div className={`listField vencimento`}>        {vencimento ? vencimento.toLocaleDateString() : ""}</div>
        <div className={`listField contato`}>           {contato ? contato : "."}</div>
        <div className={`listField descricao`}>         {descricao ? descricao : "."}</div>
        <div className={`listField grupo`}>             {grupo ? grupo : "."}</div>
        <div className={`listField subgrupo`}>          {subgrupo ? subgrupo : "."}</div>
        <div className={`listField parcelas`}>          {parcela ? parcela : "."}</div>
        <div className={`listField total-parcelas`}>    {tParcelas ? tParcelas : "."}</div>
        <div className={`listField data-baixa`}>        {dBaixa ? dBaixa.toLocaleDateString() : "."}</div>
        <div className={`listField pago`}>              {pago ? pago.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : "."}</div>
        <div className={`listField ${tituloIconeStatus}`}>.</div>
        
    </div>
  );
}

export default ListRow;