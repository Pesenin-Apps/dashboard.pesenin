import jwtDecode from 'jwt-decode';
import ContentKitchen from '../../components/organisms/ContentKitchen';
import NavbarKitchen from '../../components/organisms/Navbar/kitchen';
import Sidebar from '../../components/organisms/Sidebar';
import { getMenuTypes, getOrdersCount } from '../../services/cashier';
import { CountOrderTypes, MenuTypeTypes, UserTypes } from '../../services/data-types';

interface KitchenProps {
  user: UserTypes;
  counting: CountOrderTypes;
  sections: MenuTypeTypes[];
}

export default function Kitchen(props: KitchenProps) {
  const { user, counting, sections } = props;
  return (
    <section className="dashboard-container overflow-auto">
      <Sidebar userData={user} countData={counting} />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <NavbarKitchen activeMenu="queue" />
          <ContentKitchen data={sections} />
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

  const paramsProductType = {
    belong: 1,
  };

  const countOrders = await getOrdersCount(jwtToken);
  const sections = await getMenuTypes(paramsProductType);

  return {
    props: {
      user: userFromPayload,
      counting: countOrders.data.data,
      sections: sections.data.data,
    },
  };
}
