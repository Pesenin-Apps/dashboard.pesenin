import Link from 'next/link';
import Image from 'next/image';

export default function CardItemAdd() {
  return (
    <Link href="#">
      <a
        className="item-card add"
        data-bs-toggle="modal"
        data-bs-target="#modalTableCreate"
      >
        <Image src="/assets/icons/add.svg" width={53} height={53} />
      </a>
    </Link>
  );
}
