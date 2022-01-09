import cx from 'classnames';
import Link from 'next/link';

interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}

export default function Menu(props: Partial<MenuProps>) {
  const { title, active, href = '/kitchen' } = props;
  const classTitle = cx({
    'btn btn-nav btn-status rounded-pill text-md': true,
    'btn-active': active,
  });

  return (
    <Link href={href}>
      <a className={classTitle}>
        {title}
      </a>
    </Link>
  );
}
