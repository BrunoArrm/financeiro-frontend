import { GET_ALL, POST_TITLE } from '../../api/Api';
import './NovoTitulo.scss';
import { useState } from 'react';

const NovoTitulo = () => {

  //Declaração das variáveis de estado dos campos
  const [parcelaValue, setParcelaValue] = useState(1);
  const [tParcelasValue, setTParcelasValue] = useState("");
  const [nDocValue, setNDocValue] = useState("");
  const [contatoValue, setContatoValue] = useState("");
  const [responsavelValue, setResponsavelValue] = useState("");
  const [valorValue, setValorValue] = useState("");
  const [descricaoValue, setDescricaoValue] = useState("");
  const [grupoValue, setGrupoValue] = useState("");
  const [subgrupoValue, setSubgrupoValue] = useState("");
  const [tipoValue, setTipoValue] = useState("D");
  const [vPago, setVPago] = useState("");
  const [vencimentoValue, setVencimentoValue] = useState("");
  const [dBaixa, setDBaixa] = useState("");

  // Modificadores de estado nos campos que podem ter os dados alterados
  const handleTipoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTipoValue(e.target.value);
    console.log(tipoValue);
  };

  const handleNDocChange = (e: React.ChangeEvent<HTMLInputElement>) => { // NÚMERO DO DOCUMENTO
    setNDocValue(e?.target.value)
  }
  const handleContatoChange = (e: React.ChangeEvent<HTMLInputElement>) => { // NOME DO CONTATO
    setContatoValue(e?.target.value);
  }
  const handleResponsavelChange = (e: React.ChangeEvent<HTMLInputElement>) => { // NOME DO RESPONSÁVEL
    setResponsavelValue(e?.target.value);
  }
  const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => { // VALOR
    setValorValue(e?.target.value);
  }
  const handleVencimentoChange = (e: React.ChangeEvent<HTMLInputElement>) => { // DATA DE VENCIMENTO
    setVencimentoValue(e?.target.value + 1);
  }
  const handleDescricaoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { // DESCRIÇÃO
    setDescricaoValue(e?.target.value);
  }
  const handleGrupoChange = (e: React.ChangeEvent<HTMLInputElement>) => { // GRUPO
    setGrupoValue(e?.target.value);
  }
  const handleSubgrupoChange = (e: React.ChangeEvent<HTMLInputElement>) => { // SUBGRUPO
    setSubgrupoValue(e?.target.value);
  }
  const handleDBaixaChange = (e: React.ChangeEvent<HTMLInputElement>) => { // DATA DE BAIXA
    setDBaixa(e?.target.value);
  }
  const handleVPagoChange = (e: React.ChangeEvent<HTMLInputElement>) => { // VALOR PAGO
    setVPago(e?.target.value);
  }
  const handleTParcelasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTParcelasValue(e?.target.value);
  }

  const handleSaveButtonClick = () => {

    const titleData = {
      "id": 144,
      "nDoc": nDocValue,
      "agrupamento": 2,
      "valor": parseFloat(valorValue),
      "vencimento": vencimentoValue,
      "contato": contatoValue,
      "responsavel": responsavelValue,
      "desricao": descricaoValue,
      "grupo": grupoValue,
      "subgrupo": null,
      "parcela": parcelaValue,
      "tParcelas": 1,
      "tipo": tipoValue,
      "dBaixa": null,
      "pago": null
    };

    POST_TITLE(titleData);
  };

  return (
    <fieldset className='novoTitulo'>
      <legend> Novo título </legend>
      <div className='grid-container'>

        <div className='seletores'>
          <div className='seletor'>
            <input type="radio" id="debito" name="tipo" value="D" checked={tipoValue === "D"} onChange={handleTipoChange} />
            <label htmlFor="debito">Débito</label>
          </div>
          <div className='seletor'>
            <input type="radio" id="credito" name="tipo" value="C" checked={tipoValue === "C"} onChange={handleTipoChange} />
            <label htmlFor="credito">Crédito</label>
          </div>
        </div>

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
            type='date'
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

        <div className='campo-pequeno'>
          <label htmlFor='pago'>Total de parcelas</label>
          <input
            type='text'
            value={tParcelasValue}
            id='tParcelas'
            onChange={handleTParcelasChange}
          />
        </div>

        <div className='rodape'>
          <button onClick={handleSaveButtonClick}>
            <div />
            Salvar
          </button>
        </div>
      </div>
    </fieldset>

  );
}

export default NovoTitulo;