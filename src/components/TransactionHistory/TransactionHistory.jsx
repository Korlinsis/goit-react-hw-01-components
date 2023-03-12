import PropTypes from 'prop-types';
import { TransactionTable, TableHead, HeadTitle, TableBody, TableBodyItem, TransactionType, TransactionValue } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
    return (
        <TransactionTable>
            <TableHead>
                <tr>
                    <HeadTitle>Type</HeadTitle>
                    <HeadTitle>Amount</HeadTitle>
                    <HeadTitle>Currency</HeadTitle>
                </tr>
            </TableHead>
            <TableBody>
                {items.map(({ id, type, amount, currency }) => (
                    <TableBodyItem key={id}>
                        <TransactionType>{type}</TransactionType>
                        <TransactionValue>{amount}</TransactionValue>
                        <TransactionValue>{currency}</TransactionValue>
                    </TableBodyItem>
                ))}
            </TableBody>
        </TransactionTable>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionHistory;