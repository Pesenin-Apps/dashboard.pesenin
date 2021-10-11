import Link from 'next/link';
import cx from 'classnames';

interface CardItemProps {
  id: string;
  tableNumber: number;
  used: boolean
}

export default function CardItemAvailable(props: CardItemProps) {
  const { id, tableNumber, used } = props;
  const tableClass = cx({
    'item-card': true,
    available: true,
    used,
  });
  return (
    <Link href={`/cashier/tables/${id}`}>
      <a className={tableClass}>{tableNumber}</a>
    </Link>
  );
}
