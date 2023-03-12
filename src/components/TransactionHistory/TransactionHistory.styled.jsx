import styled from '@emotion/styled';

export const TransactionTable = styled.table`
    margin: 0 auto 100px;
    padding: 0;
    width: 350px;
    border-radius: 5px;
    background-color: #e7ecf2;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
        0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const TableHead = styled.thead`
    background-color: #00bcd5;
    color: #ffffff;
`;

export const HeadTitle = styled.th`
    padding: 5px;
    text-transform: uppercase;

    &:first-of-type {
        border-radius: 5px 0 0 0;
    }
    
    &:nth-of-type(3) {
        border-radius: 0 5px 0 0;
    }
`;

export const TableBody = styled.tbody`
    background-color: #ffffff;
    color: #497174;
`;

export const TableBodyItem = styled.tr`
    &:nth-child(even) {
        background-color: #f3f6f9;
    }
`;

export const TransactionType = styled.td`
    padding: 5px 5px 5px 30px;

    &::first-letter {
        text-transform: capitalize;
    }
`;

export const TransactionValue = styled.td`
    padding: 5px;
    text-align: center;
`;