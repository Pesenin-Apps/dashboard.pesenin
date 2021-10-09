import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { deleteTable } from '../../../services/cashier';
import { TableTypes } from '../../../services/data-types';
import NavButtonDetail from '../../molecules/NavButtonDetail';
import Caption from './Caption';
import QrCode from './QrCode';

interface TableDetailContentProps {
  data: TableTypes;
}

export default function TableDetailContent(props: TableDetailContentProps) {
  const { data } = props;
  const router = useRouter();

  const onDestroy = () => {
    Swal.fire({
      title: 'Anda yakin menghapus?',
      text: 'Data ini akan dihapus secara permanen!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteTable(data._id);
        if (!response.error) {
          router.push('/cashier/tables');
          toast.success('Berhasil, data telah dihapus!');
        } else {
          toast.error('Gagal, terjadi kesalahan!');
        }
      }
    });
  };

  return (
    <div className="table-detail mb-30">
      <div className="container">
        <div className="main-content main-content-card overflow-auto">
          <section className="detail mx-auto">
            <NavButtonDetail hrefBack="/cashier/tables" onClickTrash={onDestroy} />
            <div className="row justify-content-center">
              <div className="col-4 text-center">
                <QrCode table={data._id} />
              </div>
              <div className="col-6 my-auto">
                <Caption title="Kode Meja" content={data.name} />
                <Caption title="Nomor Meja" content={data.number.toString()} />
                <Caption title="Letak" content={data.section.name} />
                <Caption title="Status" content={data.used === true ? 'Terisi' : 'Kosong (FREE)'} />
              </div>
              <div className="col-1" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
