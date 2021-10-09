import jwtDecode from 'jwt-decode';
import ContentOrderDetail from '../../../components/organisms/ContentOrderDetail';
import Navbar from '../../../components/organisms/Navbar';
import Sidebar from '../../../components/organisms/Sidebar';
import { getOrder } from '../../../services/cashier';
import { OrderTypes, UserTypes } from '../../../services/data-types';

interface OrderDetailProps {
  orderDetail: OrderTypes;
}

export default function OrderDetail(props: OrderDetailProps) {
  const { orderDetail } = props;
  return (
    <section className="dashboard-container overflow-auto">
      <Sidebar />
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

  const response = await getOrder(idOrder, jwtToken);

  return {
    props: {
      orderDetail: response.data.data,
    },
  };
}
