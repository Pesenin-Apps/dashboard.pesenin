import Link from 'next/link';

export default function ButtonSignOut() {
  return (
    <Link href="/">
      <a className="btn btn-sign-out w-100 fw-medium text-xs text-center text-white rounded-pill">
        Keluar
      </a>
    </Link>
  );
}
