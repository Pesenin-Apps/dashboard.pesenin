import jwtDecode from 'jwt-decode';
import ContentMenuDetail from '../../../components/organisms/ContentMenuDetail';
import NavbarCashier from '../../../components/organisms/Navbar/cashier';
import Sidebar from '../../../components/organisms/Sidebar';
import { getMenu, getOrdersCount } from '../../../services/cashier';
import { CountOrderTypes, MenuTypes, UserTypes } from '../../../services/data-types';

interface DetailProps {
  user: UserTypes;
  counting: CountOrderTypes;
  menuDetail: MenuTypes;
}

export default function Detail(props: DetailProps) {
  const { user, counting, menuDetail } = props;
  return (
    <section className="dashboard-container overflow-auto">
      <Sidebar userData={user} countData={counting} />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <NavbarCashier activeMenu="menus" />
          <ContentMenuDetail data={menuDetail} />
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
    idMenu: string;
  }
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { idMenu } = params;
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
  const getMenuDetail = await getMenu(idMenu);

  return {
    props: {
      user: userFromPayload,
      counting: countOrders.data.data,
      menuDetail: getMenuDetail.data.data,
    },
  };
}
