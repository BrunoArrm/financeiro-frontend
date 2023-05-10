import { useParams } from 'react-router-dom';
import { dados } from '../../assets/helpers/Dados';
import './Titulo.scss';

const Titulo = () => {
  const { id } = useParams();
  const titulo = dados.find(item => item.id === Number(id));

  const nDoc = titulo?.nDoc;
  const contato = titulo?.contato;
  const responsavel = titulo?.responsavel;
  const valor = titulo?.valor;
  const vencimento = titulo?.vencimento;
  const descricao = titulo?.descricao;
  const grupo = titulo?.grupo;
  const subgrupo = titulo?.subgrupo;
  const parcela = titulo?.parcela;
  const tParcelas = titulo?.tParcelas;
  const tipo = titulo?.tipo;
  const dBaixa = titulo?.dBaixa;
  const pago = titulo?.pago;

  // Lógica para tratar caso o título não seja encontrado
  if (!titulo) {
    return <div>Título não encontrado</div>;
  }

  return (
    <fieldset className='titulo'>
      <legend>Título Nº {id}</legend>
      <div>
        <label htmlFor='agrupamento'>Agrupamento</label>
        <input type='text' value={titulo.agrupamento} id='agrupamento'></input>
      </div>
      <div>
        <label htmlFor='nDoc'>N.Doc </label>
        <input type='text' value={nDoc} id='nDoc'></input>
      </div>
      <div>
        <label htmlFor=''>Contato </label>
        <input type='text' value={contato} id='contato'></input>
      </div>
      <div>
        <label htmlFor='responsavel'>Responsável </label>
        <input type='text' value={responsavel} id='responsavel'></input>
      </div>
      <div>
        <label htmlFor='valor'>Valor </label>
        <input type='text' value={valor ? valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : ""} id='valor'></input>
      </div>
      <div>
        <label htmlFor='vencimento'>Data de vencimento </label>
        <input type='text' value={vencimento ? new Date(vencimento).toLocaleDateString("pt-BR") : ""} id='vencimento'></input>
      </div>
      <div>
        <label htmlFor='vencimento'>Descrição </label>
        <textarea value={descricao} id='descricao'></textarea>
      </div>
      <div>
        <label htmlFor='grupo'>Grupo </label>
        <input type='text' value={grupo} id='grupo'></input>
      </div>
      <div>
        <label htmlFor='grupo'>Grupo </label>
        <input type='text' value={grupo} id='grupo'></input>
      </div>
      <div>
        <label htmlFor='subgrupo'>Subgrupo </label>
        <input type='text' value={subgrupo} id='subgrupo'></input>
      </div>
      
      <p>Parcelas: {parcela} / {tParcelas}</p>
      <p>Tipo: {tipo}</p>
      <p>Número do Documento: {dBaixa ? new Date(dBaixa).toLocaleDateString("pt-BR") : ""}</p>
      <p>Valor pago: {pago ? pago.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : ""}</p>
    </fieldset>
  );
}

export default Titulo;