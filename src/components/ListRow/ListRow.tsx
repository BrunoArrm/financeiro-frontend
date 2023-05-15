import './ListRow.scss';
import './ListRowAnalitic.scss';
import '../../styles/MainListDimensions.scss';
import ListRowProps from '../../types/ListRowProps';
import { useContext } from 'react';
import { ListStyleContext } from '../../context/ListStyleContext';
import ListStyleContextType from '../../types/ListStyleContextType';

const ListRow = ({
  id, agrupamento, valor, vencimento, contato, responsavel, descricao, grupo, subgrupo,
  parcela, tParcelas, tipo, dBaixa, pago
}: ListRowProps) => {

  let estiloLista; // Variável que irá receber o estado do estilo da lista
  const listStyleContextValue = useContext(ListStyleContext); // Constante que recebe o contexto
  if (listStyleContextValue) { // Texta se o contexto é undefined
    const { listStyle }: ListStyleContextType = listStyleContextValue; //Caso o contexto esteja funcionando, extrai o estado necessário
    estiloLista = listStyle;
  }

  // Aplica a classe adequada para estilização de acordo com o status
  let tituloIconeStatus = "";
  let tituloColorStatus = ""
  if (pago !== null) {
    tituloIconeStatus = "liquidado";
    tituloColorStatus = "corLiquidado"
  } else if (pago === null && vencimento !== undefined && vencimento !== null && new Date(vencimento) < new Date()) {
    tituloIconeStatus = "atencao";
    tituloColorStatus = "corAtencao"
  } else {
    tituloIconeStatus = "aguardando";
    tituloColorStatus = "corAguardando"
  }

  // Abre o título clicado em uma nova guia
  const handleOpenTitle = () => {
    const url = '/titulo/' + id;
    window.open(url, '_blank');
  }

  // Condicional determina o tipo de lista
  if (estiloLista === "simples") {

    // Listagem normal
    return (
      <div className={`mainPage-listField listRow ${tituloColorStatus}`}
        onClick={() => handleOpenTitle()}>

        <div className={`listField agrupamento`}>       {agrupamento ? agrupamento : "-"}</div>
        <div className={`listField valor`}>             {valor ? valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : "."}</div>
        <div className={`listField vencimento`}>        {vencimento ? new Date(vencimento).toLocaleDateString() : ""}</div>
        <div className={`listField contato`}>           {contato ? contato : "."}</div>
        <div className={`listField descricao`}>         {descricao ? descricao : "."}</div>
        <div className={`listField grupo`}>             {grupo ? grupo : "."}</div>
        <div className={`listField subgrupo`}>          {subgrupo ? subgrupo : "."}</div>
        <div className={`listField parcelas`}>          {parcela ? parcela : "."}</div>
        <div className={`listField total-parcelas`}>    {tParcelas ? tParcelas : "."}</div>
        <div className={`listField data-baixa`}>        {dBaixa ? new Date(dBaixa).toLocaleDateString() : "."}</div>
        <div className={`listField pago`}>              {pago ? pago.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : "."}</div>
        <div className={`listField ${tituloIconeStatus}`}>.</div>

      </div>
    );

  } else {

    // Listagem analítica
    return (
      <div className={`analiticListField analitic-${tituloColorStatus}`}
        onClick={() => handleOpenTitle()}>
        <div className={`analitic-icon ${tituloIconeStatus}`} />
        <div className={tipo === "D" ? "icon-debito" : "icon-credito"} />

        <div className='titulo-dados'>

          <div className='dados-header'>
            {vencimento ? new Date(vencimento).toLocaleDateString() : ""}
            <span>{contato ? contato : "."}</span>
          </div>

          <div className='dados-container'>
            <div className='container-valor'>
              Valor: {valor ? valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : ""}
            </div>
            <div className='container-baixa'>
              <p>Data de baixa: {dBaixa ? new Date(dBaixa).toLocaleDateString() : ""}</p>
              <p>Valor pago: {pago ? pago.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : ""}</p>
            </div>
          </div>

          <div className='dados-footer'>
            <div className='agrupamentoID'>{agrupamento ? agrupamento : "-"}@{id}</div>
            <div className='responsavel'>{responsavel}</div>
          </div>

        </div>
        <div className='titulo-descricao'>
          {descricao ? descricao : "."}
        </div>

      </div>
    );

  }
}

export default ListRow;