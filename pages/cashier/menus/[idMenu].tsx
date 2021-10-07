import jwtDecode from 'jwt-decode';
import ContentMenuDetail from '../../../components/organisms/ContentMenuDetail';
import Navbar from '../../../components/organisms/Navbar';
import Sidebar from '../../../components/organisms/Sidebar';
import { getMenu } from '../../../services/cashier';
import { MenuTypes, UserTypes } from '../../../services/data-types';

interface DetailProps {
  menuDetail: MenuTypes;
}

export default function Detail(props: DetailProps) {
  const { menuDetail } = props;

  return (
    <section className="dashboard-container overflow-auto">
      <Sidebar />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <Navbar activeMenu="menus" />
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

  const response = await getMenu(idMenu);

  return {
    props: {
      menuDetail: response.data.data,
    },
  };
}
