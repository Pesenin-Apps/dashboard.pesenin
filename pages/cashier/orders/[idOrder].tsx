import jwtDecode from 'jwt-decode';
import ContentOrderDetail from '../../../components/organisms/ContentOrderDetail';
import Navbar from '../../../components/organisms/Navbar';
import Sidebar from '../../../components/organisms/Sidebar';
import { getOrder, getOrdersCount } from '../../../services/cashier';
import { CountOrderTypes, OrderTypes, UserTypes } from '../../../services/data-types';

interface OrderDetailProps {
  user: UserTypes;
  counting: CountOrderTypes;
  orderDetail: OrderTypes;
}

export default function OrderDetail(props: OrderDetailProps) {
  const { user, counting, orderDetail } = props;
  return (
    <section className="dashboard-container overflow-auto">
      <Sidebar userData={user} countData={counting} />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <Navbar activeMenu="orders" />
          <ContentOrderDetail data={orderDetail} />
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
    idOrder: string;
  }
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { idOrder } = params;
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

  const getOrderDetail = await getOrder(idOrder, jwtToken);
  const countOrders = await getOrdersCount(jwtToken);

  return {
    props: {
      user: userFromPayload,
      counting: countOrders.data.data,
      orderDetail: getOrderDetail.data.data,
    },
  };
}
