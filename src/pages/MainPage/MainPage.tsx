import { useEffect, useState } from 'react';
import ListHeader from '../../components/ListHeader/ListHeader';
import ListRow from '../../components/ListRow/ListRow';
import ListRowProps from '../../types/ListRowProps';
import { GET } from '../../api/Api';
import './MainPage.scss';

const MainPage = () => {
  const [dados, setDados] = useState<ListRowProps[]>([]);

  useEffect(() => { // Componente busca os títulos ao carregar.
    const fetchData = async () => {
      try {
        const data = await GET();
        setDados(data);
        console.log("dados recebidos ", dados);
      } catch (error) {
        console.log('Erro ao obter os dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className='mainPage'>
      <ListHeader />
      {
        dados.map((item, index) => (
          <ListRow
            key={index}
            id={item.id}
            agrupamento={item.agrupamento}
            valor={item.valor}
            vencimento={item.vencimento}
            contato={item.contato}
            responsavel={item.responsavel}
            descricao={item.descricao}
            grupo={item.grupo}
            subgrupo={item.subgrupo}
            parcela={item.parcela}
            tParcelas={item.tParcelas}
            tipo={item.tipo}
            dBaixa={item.dBaixa}
            pago={item.pago}
          />
        ))
      }
    </main>
  );
}

export default MainPage;
