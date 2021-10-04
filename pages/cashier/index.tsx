import jwtDecode from 'jwt-decode';
import ContentOrder from '../../components/organisms/ContentOrder/Index';
import Navbar from '../../components/organisms/Navbar';
import Sidebar from '../../components/organisms/Sidebar';
import { UserTypes } from '../../services/data-types';

export default function Cashier() {
  return (
    <section className="dashboard-container overflow-auto">
      <Sidebar />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <Navbar activeMenu="orders" />
          <ContentOrder />
        </div>
      </main>
    </section>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload: UserTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload;

  return {
    props: {
      user: userFromPayload,
    },
  };
}
