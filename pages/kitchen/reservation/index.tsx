import jwtDecode from 'jwt-decode';
import ContentReservation from '../../../components/organisms/ContentReservation';
import NavbarKitchen from '../../../components/organisms/Navbar/kitchen';
import Sidebar from '../../../components/organisms/Sidebar';
import { getOrdersCount } from '../../../services/cashier';
import { CountOrderTypes, UserTypes } from '../../../services/data-types';

interface ReservationProps {
  user: UserTypes;
  counting: CountOrderTypes;
}

export default function Reservation(props: ReservationProps) {
  const { user, counting } = props;
  return (
    <section className="dashboard-container overflow-auto">
      <Sidebar userData={user} countData={counting} />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <NavbarKitchen activeMenu="reservation" />
          <ContentReservation />
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

  if (userFromPayload.role !== 'kitchen') {
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
