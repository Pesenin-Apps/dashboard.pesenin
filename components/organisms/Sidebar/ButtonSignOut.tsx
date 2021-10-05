import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { signOut } from '../../../services/auth';

export default function ButtonSignOut() {
  const router = useRouter();
  const onSignOut = async () => {
    const response = await signOut();
    console.log(response);
    if (response.error) {
      toast.error(response.message);
    } else {
      Cookies.remove('token');
      toast.success('Sign Out, Berhasil!');
      router.push('/');
    }
  };

  return (
    <button type="button" className="btn btn-sign-out w-100 fw-medium text-xs text-center text-white rounded-pill" onClick={onSignOut}>
      Keluar
    </button>
  );
}
