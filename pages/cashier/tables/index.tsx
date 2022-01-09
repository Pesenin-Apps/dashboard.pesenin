import jwtDecode from 'jwt-decode';
import Sidebar from '../../../components/organisms/Sidebar';
import NavbarCashier from '../../../components/organisms/Navbar/cashier';
import ContentTable from '../../../components/organisms/ContentTable';
import { CountOrderTypes, TableSectionTypes, UserTypes } from '../../../services/data-types';
import { getOrdersCount, getTableSection } from '../../../services/cashier';

interface TablesProps {
  user: UserTypes;
  counting: CountOrderTypes;
  dataTableSections: TableSectionTypes[];
}

export default function Tables(props: TablesProps) {
  const { user, counting, dataTableSections } = props;
  return (
    <section className="dashboard-container overflow-auto">
      <Sidebar userData={user} countData={counting} />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <NavbarCashier activeMenu="tables" />
          <ContentTable data={dataTableSections} />
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
  const getTableSections = await getTableSection();

  return {
    props: {
      user: userFromPayload,
      counting: countOrders.data.data,
      dataTableSections: getTableSections.data.data,
    },
  };
}
