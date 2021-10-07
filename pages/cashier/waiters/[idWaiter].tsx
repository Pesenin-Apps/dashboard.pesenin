import jwtDecode from 'jwt-decode';
import ContentWaiterDetail from '../../../components/organisms/ContentWaiterDetail';
import Navbar from '../../../components/organisms/Navbar';
import Sidebar from '../../../components/organisms/Sidebar';
import { getUser } from '../../../services/cashier';
import { UserTypes } from '../../../services/data-types';

interface DetailProps {
  waiterDetail: UserTypes;
}

export default function Detail(props: DetailProps) {
  const { waiterDetail } = props;

  return (
    <section className="dashboard-container overflow-auto">
      <Sidebar />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <Navbar activeMenu="waiters" />
          <ContentWaiterDetail data={waiterDetail} />
        </div>
      </main>
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    },
  },
  params: {
    idWaiter: string;
  }
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { idWaiter } = params;
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

  const response = await getUser(idWaiter, jwtToken);

  return {
    props: {
      waiterDetail: response.data.data,
    },
  };
}
