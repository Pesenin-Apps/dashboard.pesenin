import jwtDecode from 'jwt-decode';
import Sidebar from '../../../components/organisms/Sidebar';
import Navbar from '../../../components/organisms/Navbar';
import ContentTable from '../../../components/organisms/ContentTable';
import { CountOrderTypes, UserTypes } from '../../../services/data-types';
import { getOrdersCount } from '../../../services/cashier';

interface TablesProps {
  user: UserTypes;
  counting: CountOrderTypes;
}

export default function Tables(props: TablesProps) {
  const { user, counting } = props;
  return (
    <section className="dashboard-container overflow-auto">
      <Sidebar userData={user} countData={counting} />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <Navbar activeMenu="tables" />
          <ContentTable />
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
