import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { signOut } from '../../../services/auth';

export default function ButtonSignOut() {
  const router = useRouter();
  const onSignOut = async () => {
    Swal.fire({
      title: 'Anda yakin ingin Keluar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ffa700',
      confirmButtonText: 'Ya, Keluar!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await signOut();
        if (response.error) {
          toast.error(response.message);
        } else {
          Cookies.remove('token');
          toast.success('Sign Out, Berhasil!');
          router.push('/');
        }
      }
    });
  };

  return (
    <button type="button" className="btn btn-sign-out w-100 fw-medium text-xs text-center text-white rounded-pill" onClick={onSignOut}>
      Keluar
    </button>
  );
}
