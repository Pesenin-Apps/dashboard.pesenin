import jwtDecode from 'jwt-decode';
import ContentWaiter from '../../../components/organisms/ContentWaiter';
import NavbarCashier from '../../../components/organisms/Navbar/cashier';
import Sidebar from '../../../components/organisms/Sidebar';
import { getOrdersCount } from '../../../services/cashier';
import { CountOrderTypes, UserTypes } from '../../../services/data-types';

interface WaitersProps {
  user: UserTypes;
  counting: CountOrderTypes;
}

export default function Waiters(props: WaitersProps) {
  const { user, counting } = props;
  return (
    <section className="dashboard-container overflow-auto">
      <Sidebar userData={user} countData={counting} />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <NavbarCashier activeMenu="waiters" />
          <ContentWaiter />
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

  const countOrders = await getOrdersCount(jwtToken);

  return {
    props: {
      user: userFromPayload,
      counting: countOrders.data.data,
    },
  };
}
