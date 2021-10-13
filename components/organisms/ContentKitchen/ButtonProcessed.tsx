import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { updateOrderItem } from '../../../services/kitchen';

interface ButtonProcessedProps {
  id: string;
}

export default function ButtonProcessed(props: ButtonProcessedProps) {
  const { id } = props;
  const router = useRouter();

  const onProcessed = () => {
    Swal.fire({
      title: 'Proses Pesanan?',
      text: 'Pesanan ini akan diproses oleh Chef!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0d6efd',
      confirmButtonText: 'Ya, proses!',
      cancelButtonText: 'Batal',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const dataUpdate = new FormData();
        dataUpdate.append('status', '3');
        const response = await updateOrderItem(id, dataUpdate);
        if (!response.error) {
          // toast.success('Berhasil, pesanan telah diproses!');
          router.reload();
        } else {
          toast.error('Gagal, terjadi kesalahan!');
        }
      }
    });
  };

  return (
    <button type="button" className="btn btn-primary rounded-pill text-sm" onClick={onProcessed}>
      Proses
    </button>
  );
}
