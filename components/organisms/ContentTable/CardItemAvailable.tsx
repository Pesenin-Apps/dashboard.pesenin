import Link from 'next/link';
import cx from 'classnames';
import { TableStatus } from '../../../config/constans';

interface CardItemProps {
  id: string;
  tableNumber: number;
  status: number;
}

export default function CardItemAvailable(props: CardItemProps) {
  const {
    id, tableNumber, status,
  } = props;

  const tableClass = cx({
    'item-card': true,
    available: true,
    used: status === TableStatus.used,
    reserved: status === TableStatus.reserved,
  });

  return (
    <Link href={`/cashier/tables/${id}`}>
      <a
        className={tableClass}
        title={status === TableStatus.free ? 'Kosong (FREE)' : (status === TableStatus.used ? 'Terisi' : 'Reservasi')}
      >
        {tableNumber}
      </a>
    </Link>
  );
}
