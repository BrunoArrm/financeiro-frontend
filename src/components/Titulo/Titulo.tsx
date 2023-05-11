import { useParams } from 'react-router-dom';
import { dados } from '../../assets/helpers/Dados';
import './Titulo.scss';
import { useState } from 'react';

const Titulo = () => {
  const { id } = useParams();
  const titulo = dados.find(item => item.id === Number(id));

  const grupo = titulo?.grupo;
  const subgrupo = titulo?.subgrupo;
  const parcela = titulo?.parcela;
  const tParcelas = titulo?.tParcelas;
  const tipo = titulo?.tipo;
  const dBaixa = titulo?.dBaixa;
  const pago = titulo?.pago;

  const [nDocValue, setNDocValue] = useState(titulo?.nDoc);
  const [contatoValue, setContatoValue] = useState(titulo?.contato);
  const [responsavelValue, setResponsavelValue] = useState(titulo?.responsavel);
  const valor = titulo?.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
  const [valorValue, setValorValue] = useState(valor);
  let vencimento;
  if (titulo?.vencimento) {
    vencimento = new Date(titulo?.vencimento).toLocaleDateString("pt-BR");
  } else {
    vencimento = null
  }
  const [vencimentoValue, setVencimentoValue] = useState(vencimento);
  const [descricaoValue, setDescricaoValue] = useState(titulo?.descricao);

  const handleNDocChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNDocValue(e?.target.value)
  }

  const handleContatoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContatoValue(e?.target.value);
  }

  const handleResponsavelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResponsavelValue(e?.target.value);
  }

  const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValorValue(e?.target.value);
  }

  const handleVencimentoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVencimentoValue(e?.target.value);
  }

  const handleDescricaoValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescricaoValue(e?.target.value);
  }

  // Lógica para tratar caso o título não seja encontrado
  if (!titulo) {
    return <div>Título não encontrado</div>;
  }

  return (
    <fieldset className='titulo'>
      <legend> Título nº {id} </legend>
      <div className='grid-container'>

        <div className='campo-pequeno'>
          <label htmlFor='nDoc'>N. Doc.</label>
          <input 
            type='text' 
            value={nDocValue} 
            id='nDoc' 
            onChange={handleNDocChange}
          />
        </div>

        <div className='campo-pequeno'>
          <label htmlFor='contato'>Contato</label>
          <input 
            type='text' 
            value={contatoValue} 
            id='contato' 
            onChange={handleContatoChange}
          />
        </div>

        <div className='campo-pequeno'>
          <label htmlFor='responsavel'>Responsável</label>
          <input 
            type='text' 
            value={responsavelValue} 
            id='responsavel' 
            onChange={handleResponsavelChange}
          />
        </div>

        <div className='campo-pequeno'>
          <label htmlFor='valor'>Valor</label>
          <input
            type='text'
            value={valorValue}
            id='valor'
            onChange={handleValorChange}
          />
        </div>

        <div className='campo-pequeno'>
          <label htmlFor='vencimento'>Data de vencimento</label>
          <input
            type='text'
            value={vencimentoValue}
            id='vencimento'
            onChange={handleVencimentoChange}
          />
        </div>

        <div className='campo-grande'>
          <label htmlFor='descricao'>Descrição</label>
          <textarea 
            value={descricaoValue} 
            id='descricao'
            onChange={handleDescricaoValue}
          />
        </div>

        <div className='campo-pequeno'>
          <label htmlFor='grupo'>Grupo</label>
          <input type='text' value={grupo} id='grupo' />
        </div>

        <div className='campo-pequeno'>
          <label htmlFor='subgrupo'>Subgrupo</label>
          <input type='text' value={subgrupo} id='subgrupo' />
        </div>

        <div className='campo-pequeno'>
          <label htmlFor='tipo'>Tipo</label>
          <input type='text' value={tipo} id='tipo' />
        </div>

        <div className='campo-pequeno'>
          <label htmlFor='dBaixa'>Data de baixa</label>
          <input
            type='text'
            value={dBaixa ? new Date(dBaixa).toLocaleDateString("pt-BR") : ""}
            id='dBaixa'
          />
        </div>

        <div className='campo-pequeno'>
          <label htmlFor='pago'>Valor pago</label>
          <input
            type='text'
            value={pago ? pago.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : ""}
            id='pago'
          />
        </div>

      </div>
      <div className='rodape'>
        <p>Parcelas: {parcela} / {tParcelas}</p>
        <div className='campo-agrupamento'>ID Agrupadora {titulo.agrupamento}</div>
      </div>
    </fieldset>

  );
}

export default Titulo;