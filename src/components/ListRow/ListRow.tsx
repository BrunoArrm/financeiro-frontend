import './ListRow.scss';
import '../../styles/MainListDimensions.scss';
import ListRowProps from '../../types/ListRowProps';

const ListRow = ({  
                    agrupamento, valor, vencimento, contato, descricao, grupo, subGrupo,
                    parcelas, tParcelas, tipo, dBaixa, pago
                }: ListRowProps) => {
  
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

  return (
    <div className={`mainPage-listField listRow ${tituloColorStatus}`}>
      
        <div className={`listField agrupamento`}>       {agrupamento ? agrupamento : "-"}</div>
        <div className={`listField valor`}>             {valor ? valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : "."}</div>
        <div className={`listField vencimento`}>        {vencimento ? vencimento.toLocaleDateString() : ""}</div>
        <div className={`listField contato`}>           {contato ? contato : "."}</div>
        <div className={`listField descricao`}>         {descricao ? descricao : "."}</div>
        <div className={`listField grupo`}>             {grupo ? grupo : "."}</div>
        <div className={`listField subgrupo`}>          {subGrupo ? subGrupo : "."}</div>
        <div className={`listField parcelas`}>          {parcelas ? parcelas : "."}</div>
        <div className={`listField total-parcelas`}>    {tParcelas ? tParcelas : "."}</div>
        <div className={`listField data-baixa`}>        {dBaixa ? dBaixa.toLocaleDateString() : "."}</div>
        <div className={`listField pago`}>              {pago ? pago.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : "."}</div>
        <div className={`listField ${tituloIconeStatus}`}>.</div>
        
    </div>
  );
}

export default ListRow;