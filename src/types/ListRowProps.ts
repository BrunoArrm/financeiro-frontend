interface ListRowProps {
    agrupamento: number;
    nDoc?: string | null;
    valor?: number | null;
    vencimento?: Date | null;
    contato?: string | null;
    descricao?: string | null;
    grupo?: string | null;
    subGrupo?: string | null;
    parcelas?: number | null;
    tParcelas?: number | null;
    tipo?: string | null;
    dBaixa?: Date | null;
    pago?: number | null;
}

export default ListRowProps;