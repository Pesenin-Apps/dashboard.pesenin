import jwtDecode from 'jwt-decode';
import ContentWaiterDetail from '../../../components/organisms/ContentWaiterDetail';
import Navbar from '../../../components/organisms/Navbar';
import Sidebar from '../../../components/organisms/Sidebar';
import { getOrdersCount, getUser } from '../../../services/cashier';
import { CountOrderTypes, UserTypes } from '../../../services/data-types';

interface DetailProps {
  user: UserTypes;
  counting: CountOrderTypes;
  waiterDetail: UserTypes;
}

export default function Detail(props: DetailProps) {
  const { user, counting, waiterDetail } = props;

  return (
    <section className="dashboard-container overflow-auto">
      <Sidebar userData={user} countData={counting} />
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

  const countOrders = await getOrdersCount(jwtToken);
  const getWaiterDetail = await getUser(idWaiter, jwtToken);

  return {
    props: {
      user: userFromPayload,
      counting: countOrders.data.data,
      waiterDetail: getWaiterDetail.data.data,
    },
  };
}
