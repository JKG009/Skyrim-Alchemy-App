import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: black;
    margin-top: 80px;
    justify-content: space-around;
    padding: 1rem 4rem;
    font-size: 1.2rem;
    width: 100vw;
    min-width: 985px;
    overflow: hidden;

    @media (max-width: 1450px) {
        margin-top: 120px;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
`

export const Title = styled.th`
    text-decoration: underline;
    text-align: left;
    font-size: 1.4rem;
    padding: 12px 15px;
`;

export const ListContainer = styled.table`
    width: 100%;
    border-collapse: collapse;
`

export const TableHead = styled.thead`
    tr {
        background-color: rgba( 150, 150, 150, 0.6)
    }
`

export const TableBody = styled.tbody`
    tr {
        transition: all 0.3s;
        border-bottom: 1px grey solid;
        :hover{
            background: rgba( 210, 210, 210, 0.5);
        }
    };
`

export const TitleTableRow = styled.tr`

`

export const TableRow = styled.tr`

`

export const TableData = styled.td`
    padding: 12px 15px;
`