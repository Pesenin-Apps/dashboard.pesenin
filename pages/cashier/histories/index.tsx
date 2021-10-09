import jwtDecode from 'jwt-decode';
import ContentHistory from '../../../components/organisms/ContentHistory';
import Navbar from '../../../components/organisms/Navbar';
import Sidebar from '../../../components/organisms/Sidebar';
import { UserTypes } from '../../../services/data-types';

export default function Histories() {
  return (
    <section className="dashboard-container overflow-auto">
      <Sidebar />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <Navbar activeMenu="histories" />
          <ContentHistory />
        </div>
      </main>
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
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

  if (userFromPayload.role !== 'cashier') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
