import ListHeader from '../../components/ListHeader/ListHeader';
import ListRow from '../../components/ListRow/ListRow';
import './MainPage.scss';
import {dados} from '../../assets/helpers/Dados';

const MainPage = () => {
  return (
    <main className='mainPage'>
      <ListHeader />
      {dados.map((item, index) => (
        <ListRow
          key={index}
          agrupamento={item.agrupamento}
          valor={item.valor}
          vencimento={item.vencimento}
          contato={item.contato}
          descricao={item.descricao}
          grupo={item.grupo}
          subGrupo={item.subgrupo}
          parcelas={item.parcela}
          tParcelas={item["total-parcelas"]}
          tipo={item.tipo}
          dBaixa={item["data-baixa"]}
          pago={item["valor-pago"]}
        />
      ))}
    </main>
  );
}

export default MainPage;
