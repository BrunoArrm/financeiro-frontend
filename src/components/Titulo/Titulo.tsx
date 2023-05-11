import { useParams } from 'react-router-dom';
import { dados } from '../../assets/helpers/Dados';
import './Titulo.scss';
import { useState } from 'react';

const Titulo = () => {
  const { id } = useParams();
  const titulo = dados.find(item => item.id === Number(id));

  const parcela = titulo?.parcela;
  const tParcelas = titulo?.tParcelas;

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
  const [grupoValue, setGrupoValue] = useState(titulo?.grupo);
  const [subgrupoValue, setSubgrupoValue] = useState(titulo?.subgrupo);
  const tipoValue = titulo?.tipo === "D" ? "Débito" : "Crédito";
  let dataBaixa;
  if (titulo?.dBaixa) {
    dataBaixa = new Date(titulo?.dBaixa).toLocaleDateString("pt-BR");
  } else {
    dataBaixa = null
  }
  const [dBaixa, setDBaixa] = useState(dataBaixa);
  const valorPago = titulo?.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
  const [vPago, setVPago] = useState(valorPago);

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

  const handleDescricaoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescricaoValue(e?.target.value);
  }

  const handleGrupoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGrupoValue(e?.target.value);
  }

  const handleSubgrupoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubgrupoValue(e?.target.value);
  }

  const handleDBaixaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDBaixa(e?.target.value);
  }

  const handleVPagoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVPago(e?.target.value);
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
            onChange={handleDescricaoChange}
          />
        </div>

        <div className='campo-pequeno'>
          <label htmlFor='grupo'>Grupo</label>
          <input 
            type='text' 
            value={grupoValue} 
            id='grupo'
            onChange={handleGrupoChange}
          />
        </div>

        <div className='campo-pequeno'>
          <label htmlFor='subgrupo'>Subgrupo</label>
          <input 
            type='text' 
            value={subgrupoValue} 
            id='subgrupo'
            onChange={handleSubgrupoChange}
          />
        </div>


        <div className='campo-pequeno'>
          <label htmlFor='dBaixa'>Data de baixa</label>
          <input
            type='text'
            value={dBaixa}
            id='dBaixa'
            onChange={handleDBaixaChange}
            />
        </div>

        <div className='campo-pequeno'>
          <label htmlFor='pago'>Valor pago</label>
          <input
            type='text'
            value={vPago}
            id='pago'
            onChange={handleVPagoChange}
            />
        </div>

      </div>
      <div className='rodape'>
        <p>{tipoValue}</p>
        <p>Parcelas: {parcela} / {tParcelas}</p>
        <div className='campo-agrupamento'>ID Agrupadora {titulo.agrupamento}</div>
      </div>
    </fieldset>

  );
}

export default Titulo;