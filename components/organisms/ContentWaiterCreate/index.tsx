import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { setUser } from '../../../services/cashier';
import Input from '../../atoms/Input';
import NavButtonCreate from '../../molecules/NavButtonCreate';

export default function ContentWaiterCreate() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const router = useRouter();

  const onSubmit = async () => {
    if (!name) {
      toast.error('Masukkan nama Pelayan');
    } else if (!email) {
      toast.error('Masukkan email Pelayan');
    } else if (!password) {
      toast.error('Masukkan password untuk akun Pelayan');
    } else if (!passwordConfirm) {
      toast.error('Masukkan konfirmasi password akun Pelayan');
    } else if (password !== passwordConfirm) {
      toast.error('Password dan Password Konfirmasi Tidak Valid!');
    } else {
      const data = new FormData();
      data.append('fullname', name);
      data.append('email', email);
      data.append('password', password);
      data.append('role', 'waiter');
      const result = await setUser(data);
      if (result.error) {
        toast.error(result.message);
      } else {
        toast.success('Berhasil, pelayan telah ditambahkan!');
        router.push('/cashier/waiters');
      }
    }
  };

  return (
    <div className="waiter-create mb-30">
      <div className="container">

        <div className="main-content main-content-card overflow-auto">
          <section className="create mx-auto">
            <NavButtonCreate hrefBack="/cashier/waiters" />
            <div className="d-flex flex-row  align-items-center justify-content-between mt-10 mb-30">
              <div className="d-flex flex-row align-items-center">
                <div>
                  <p className="fw-bold text-xl color-palette-0 mb-10">Tambah Pelayan baru</p>
                  <p className="color-palette-5 m-0">Isi Data Yang Valid</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="row d-flex pt-20">

              <div className="pb-20">
                <Input
                  label="Nama"
                  placeholder="Masukkan Nama Lengkap"
                  isRequired
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="pb-20">
                <Input
                  label="Email"
                  placeholder="Masukkan Email Address"
                  isRequired
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="pb-20">
                <Input
                  type="password"
                  label="Password"
                  placeholder="Masukkan Password"
                  isRequired
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="pb-20">
                <Input
                  type="password"
                  label="Password Konfirmasi"
                  placeholder="Masukkan Password Konfirmasi"
                  isRequired
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </div>

            </div>

            <div className="d-md-block d-flex flex-column w-100 pt-20">
              <button type="button" className="btn btn-primary fw-medium text-white text-lg" onClick={onSubmit}>
                Tambah
              </button>
            </div>

          </section>
        </div>

      </div>
    </div>
  );
}
