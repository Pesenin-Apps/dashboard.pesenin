import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { deleteUser, updateUser } from '../../../services/cashier';
import { UserTypes } from '../../../services/data-types';
import Input from '../../atoms/Input';
import NavButtonDetail from '../../molecules/NavButtonDetail';

interface ContentMenuDetailProps {
  data: UserTypes
}

export default function ContentWaiterDetail(props: ContentMenuDetailProps) {
  const { data } = props;
  const [waiter, setWaiter] = useState<UserTypes>({
    _id: '',
    fullname: '',
    email: '',
    role: '',
    password: '',
    createdAt: '',
  });
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');

  const router = useRouter();

  useEffect(() => {
    setWaiter(data);
  }, []);

  const onSubmit = async () => {
    if (!waiter.fullname) {
      toast.error('Masukkan nama Pelayan');
    } else if (newPassword.length > 0 && !newPasswordConfirm) {
      toast.error('Masukkan Konfirmasi Password Baru!');
    } else if (newPasswordConfirm !== newPassword) {
      toast.error('Password Baru dan Konfirmasi Password Baru Tidak Valid!');
    } else {
      const dataUpdate = new FormData();
      dataUpdate.append('fullname', waiter.fullname);
      dataUpdate.append('new_password', newPassword);
      const response = await updateUser(dataUpdate, waiter._id);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success('Berhasil, data pelayan telah diubah!');
        router.push('/cashier/waiters');
      }
    }
  };

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
        const response = await deleteUser(data._id);
        if (!response.error) {
          router.push('/cashier/waiters');
          toast.success('Berhasil, data telah dihapus!');
        } else {
          toast.error('Gagal, terjadi kesalahan!');
        }
      }
    });
  };

  return (
    <div className="waiter-detail mb-30">
      <div className="container">

        <div className="main-content main-content-card overflow-auto">
          <section className="create mx-auto">
            <NavButtonDetail hrefBack="/cashier/waiters" onClickTrash={onDestroy} />
            <div className="d-flex flex-row  align-items-center justify-content-between mt-10 mb-30">
              <div className="d-flex flex-row align-items-center">
                <div>
                  <p className="fw-bold text-xl color-palette-0 mb-10">{data.fullname}</p>
                  <p className="color-palette-5 m-0">Detail Pelayan</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="row d-flex pt-20">

              <div className="pb-20">
                <Input
                  label="Email Address"
                  placeholder="Masukkan Email Address"
                  disabled
                  isRequired
                  value={data.email}
                />
              </div>

              <div className="pb-20">
                <Input
                  label="Nama"
                  placeholder="Masukkan Nama Lengkap"
                  isRequired
                  value={waiter.fullname}
                  onChange={(e) => setWaiter({
                    ...waiter,
                    fullname: e.target.value,
                  })}
                />
              </div>

              <hr />

              <div className="pb-20">
                <Input
                  type="password"
                  label="Password"
                  placeholder="Masukkan Password"
                  isRequired={false}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  Kosongkan, jika tidak ingin mengganti
                  password.
                </div>
              </div>

              <div className="pb-20">
                <Input
                  type="password"
                  label="Password Konfirmasi"
                  placeholder="Masukkan Password Konfirmasi"
                  isRequired={false}
                  onChange={(e) => setNewPasswordConfirm(e.target.value)}
                />
              </div>

            </div>

            <div className="d-md-block d-flex flex-column w-100 pt-20">
              <button type="button" className="btn btn-primary fw-medium text-white text-lg" onClick={onSubmit}>
                Simpan
              </button>
            </div>

          </section>
        </div>

      </div>
    </div>
  );
}
