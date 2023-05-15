interface ListRowProps {
    id: number,
    agrupamento: number;
    nDoc?: string | null;
    contato?: string | null;
    responsavel?: string | null;
    valor?: number | null;
    vencimento?: string | null;
    descricao?: string | null;
    grupo?: string | null;
    subgrupo?: string | null;
    parcela?: number | null;
    tParcelas?: number | null;
    tipo?: string;
    dBaixa?: string | null;
    pago?: number | null;
}

export default ListRowProps;