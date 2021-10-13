import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { updateOrderItem } from '../../../services/kitchen';

interface ButtonFinishedProps {
  id: string;
}

export default function ButtonFinished(props: ButtonFinishedProps) {
  const { id } = props;
  const router = useRouter();

  const onFinished = () => {
    Swal.fire({
      title: 'Pesanan Telah Selesai?',
      text: 'Pesanan ini akan siap diantarkan oleh Pelayan!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0d6efd',
      confirmButtonText: 'Ya, selesai!',
      cancelButtonText: 'Batal',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const dataUpdate = new FormData();
        dataUpdate.append('status', '4');
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
    <button type="button" className="btn btn-success rounded-pill text-sm" onClick={onFinished}>
      Selesai
    </button>
  );
}
