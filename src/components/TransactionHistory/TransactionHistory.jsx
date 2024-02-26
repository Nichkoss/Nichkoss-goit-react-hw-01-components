import {
  TableTransaction,
  TitleTable,
  TableElement,
  TextTable,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableTransaction>
      <thead>
        <tr>
          <TitleTable>Type</TitleTable>
          <TitleTable>Amount</TitleTable>
          <TitleTable>Currency</TitleTable>
        </tr>
      </thead>

      {items.map(({ id, type, amount, currency }) => {
        return (
          <tbody key={id}>
            <TableElement>
              <TextTable>{type}</TextTable>
              <TextTable>{amount}</TextTable>
              <TextTable>{currency}</TextTable>
            </TableElement>
          </tbody>
        );
      })}
    </TableTransaction>
  );
};
