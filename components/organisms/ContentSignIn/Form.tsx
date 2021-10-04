import Link from 'next/link';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { signIn } from '../../../services/auth';

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      email, password,
    };

    if (!email || !password) {
      toast.error('Email dan Password Wajib Diisi!');
    } else {
      const response = await signIn(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        const { token } = response.data;
        const tokenBase64 = btoa(token);
        Cookies.set('token', tokenBase64);
        if (response.data.user.role === 'cashier') {
          toast.success('Sign In Berhasil');
          router.push('/cashier');
        } else if (response.data.user.role === 'kitchen') {
          toast.success('Sign In Berhasil');
          router.push('/kitchen');
        } else {
          toast.error('Anda Tidak Berhak Masuk');
        }
        console.log(response);
      }
    }
  };

  return (
    <form action="">
      <div className="pt-30">
        <label className="form-label text-lg fw-medium color-palette-0 mb-10">Email Address</label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          placeholder="Masukkan Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="pt-30">
        <label className="form-label text-lg fw-medium color-palette-0 mb-10">Password</label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          placeholder="Masukkan Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button type="button" className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16" onClick={onSubmit}>
          Masuk
        </button>
        <Link href="/cashier">
          <a className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16" role="button">Masuk</a>
        </Link>
      </div>
      <ToastContainer />
    </form>
  );
}
