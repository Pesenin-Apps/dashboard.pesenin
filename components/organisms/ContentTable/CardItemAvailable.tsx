import Link from 'next/link';

interface CardItemProps {
  id: string;
  tableNumber: number;
}

export default function CardItemAvailable(props: CardItemProps) {
  const { id, tableNumber } = props;
  return (
    <Link href={`/cashier/tables/[id]?id=${id}`} as={`/cashier/tables/${id}`}>
      <a
        className="item-card available"
      // data-bs-toggle="modal"
      // data-bs-target="#modalTableDetail"
      >
        {tableNumber}
      </a>
    </Link>
  );
}
