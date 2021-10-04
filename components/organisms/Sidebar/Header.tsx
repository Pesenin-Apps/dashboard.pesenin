import Image from 'next/image';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import Profile from './Profile';

export default function Header() {
  const [user, setUser] = useState({
    email: '',
    fullname: '',
  });
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      setUser(payload);
    }
  }, []);
  return (
    <div className="text-center pb-50 pe-30">
      <div className="mb-20">
        <Image
          src="/assets/logonotext.svg"
          width={90}
          height={90}
          className="img-fluid mb-20"
        />
      </div>
      <Profile name={user.fullname} email={user.email} />
    </div>
  );
}
