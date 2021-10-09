import NumberFormat from 'react-number-format';

interface TableRowProps {
  id: string;
  productName: string;
  quantity: number;
  price: number;
  total: number;
}

export default function TableRow(props: TableRowProps) {
  const {
    id, productName, quantity, price, total,
  } = props;
  return (
    <tr key={id}>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>
        <NumberFormat value={price} displayType="text" thousandSeparator="." decimalSeparator="," />
      </td>
      <td>
        <NumberFormat value={total} displayType="text" thousandSeparator="." decimalSeparator="," />
      </td>
    </tr>
  );
}
