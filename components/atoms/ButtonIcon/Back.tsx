import Link from 'next/link';
import Image from 'next/image';

interface TrashProps {
  href: string;
}

export default function Back(props: TrashProps) {
  const { href } = props;
  return (
    <Link href={href}>
      <a className="btn-icon" role="button">
        <Image src="/assets/icons/arrow-left.svg" width={24} height={24} />
      </a>
    </Link>
  );
}
