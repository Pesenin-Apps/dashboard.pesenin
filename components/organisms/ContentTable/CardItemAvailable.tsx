import Link from 'next/link';

interface CardItemProps {
  id: string;
  tableNumber: number;
}

export default function CardItemAvailable(props: CardItemProps) {
  const { id, tableNumber } = props;
  return (
    <Link href={`/cashier/tables/${id}`}>
      <a className="item-card available">{tableNumber}</a>
    </Link>
  );
}
