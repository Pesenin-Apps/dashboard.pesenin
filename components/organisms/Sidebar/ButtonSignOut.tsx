import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export default function ButtonSignOut() {
  const router = useRouter();
  const onSignOut = () => {
    Cookies.remove('token');
    router.push('/');
  };

  return (
    <button type="button" className="btn btn-sign-out w-100 fw-medium text-xs text-center text-white rounded-pill" onClick={onSignOut}>
      Keluar
    </button>
  );
}
