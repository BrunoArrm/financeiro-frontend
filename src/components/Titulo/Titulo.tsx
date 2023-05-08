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
    <div className='titulo'>
      <p>Agrupamento: {titulo.agrupamento}</p>
      <p>Número do Documento: {nDoc}</p>
      <p>Contato: {contato}</p>
      <p>Responsável: {responsavel}</p>
      <p>Valor: {valor ? valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : ""}</p>
      <p>Data de vencimento: {vencimento ? new Date(vencimento).toLocaleDateString("pt-BR") : ""}</p>
      <p>Descrição: {descricao}</p>
      <p>Grupo: {grupo}</p>
      <p>Subgrupo': {subgrupo}</p>
      <p>Parcelas: {parcela} / {tParcelas}</p>
      <p>Tipo: {tipo}</p>
      <p>Número do Documento: {dBaixa ? new Date(dBaixa).toLocaleDateString("pt-BR") : ""}</p>
      <p>Valor pago: {pago ? pago.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : ""}</p>
    </div>
  );
}

export default Titulo;