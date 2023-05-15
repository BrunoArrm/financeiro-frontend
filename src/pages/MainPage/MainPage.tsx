import ListHeader from '../../components/ListHeader/ListHeader';
import ListRow from '../../components/ListRow/ListRow';
import './MainPage.scss';
import { GET } from '../../api/Api';
import { useEffect, useState } from 'react';

const MainPage = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GET();
        setDados(data);
        console.log(dados)
      } catch (error) {
        console.log('Erro ao obter os dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className='mainPage'>
      {/* <ListHeader />
      {dados.map((item, index) => (
        <ListRow
          key={index}
          id={item.id}
          agrupamento={item.agrupamento}
          valor={item.valor}
          vencimento={item.vencimento !== null ? new Date(item.vencimento) : null}
          contato={item.contato}
          responsavel={item.responsavel}
          descricao={item.descricao}
          grupo={item.grupo}
          subgrupo={item.subgrupo}
          parcela={item.parcela}
          tParcelas={item.tParcelas}
          tipo={item.tipo}
          dBaixa={item.dBaixa !== null ? new Date(item.dBaixa) : null}
          pago={item.pago}
        />
      ))} */}
    </main>
  );
}

export default MainPage;
