import jwtDecode from 'jwt-decode';
import ContentHistoryDetail from '../../../components/organisms/ContentHistoryDetail';
import Navbar from '../../../components/organisms/Navbar';
import Sidebar from '../../../components/organisms/Sidebar';
import { getOrder, getOrdersCount } from '../../../services/cashier';
import { CountOrderTypes, OrderTypes, UserTypes } from '../../../services/data-types';

interface HistoryDetailProps {
  user: UserTypes;
  counting: CountOrderTypes;
  orderDetail: OrderTypes;
}

export default function HistoryDetail(props: HistoryDetailProps) {
  const { user, counting, orderDetail } = props;
  return (
    <section className="dashboard-container overflow-auto">
      <Sidebar userData={user} countData={counting} />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <Navbar activeMenu="histories" />
          <ContentHistoryDetail data={orderDetail} />
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
    idHistory: string;
  }
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { idHistory } = params;
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

  const getOrderDetail = await getOrder(idHistory, jwtToken);
  const countOrders = await getOrdersCount(jwtToken);

  return {
    props: {
      user: userFromPayload,
      counting: countOrders.data.data,
      orderDetail: getOrderDetail.data.data,
    },
  };
}
