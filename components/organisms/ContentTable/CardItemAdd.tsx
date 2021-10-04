import Link from 'next/link';
import Image from 'next/image';

interface CardItemAddProps {
  section: string;
}

export default function CardItemAdd(props: CardItemAddProps) {
  const { section } = props;
  return (
    <Link href="#">
      <a
        className="item-card add"
        data-bs-toggle="modal"
        data-bs-target={`#modalTableCreate${section}`}
      >
        <Image src="/assets/icons/add.svg" width={53} height={53} />
      </a>
    </Link>
  );
}
