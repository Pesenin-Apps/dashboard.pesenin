import { useRouter } from 'next/router';

export default function TableDetail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      HAI
      {' '}
      {id}
    </div>
  );
}
