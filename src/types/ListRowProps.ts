interface ListRowProps {
    agrupamento: number;
    nDoc?: string | null;
    valor?: number | null;
    vencimento?: string | null;
    contato?: string | null;
    descricao?: string | null;
    grupo?: string | null;
    subGrupo?: string | null;
    parcelas?: number | null;
    tParcelas?: number | null;
    tipo?: string | null;
    dBaixa?: string | null;
    pago?: number | null;
}

export default ListRowProps;