import jwtDecode from 'jwt-decode';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../../components/organisms/Navbar';
import Sidebar from '../../../components/organisms/Sidebar';
import ContentTableDetail from '../../../components/organisms/ContentTableDetail';
import { getOrdersCount, getTableDetail } from '../../../services/cashier';
import { CountOrderTypes, UserTypes } from '../../../services/data-types';

interface TableDetailProps {
  user: UserTypes;
  counting: CountOrderTypes;
}

export default function TableDetail(props: TableDetailProps) {
  const { user, counting } = props;
  const { query, isReady } = useRouter();
  const [dataItem, setDataItem] = useState({
    _id: '',
    name: '',
    number: 0,
    section: {
      _id: '',
      name: '',
      code: '',
    },
    status: 1,
  });

  const getTableDetailAPI = useCallback(async (id) => {
    const data = await getTableDetail(id);
    setDataItem(data.data.data);
  }, []);

  useEffect(() => {
    if (isReady) {
      getTableDetailAPI(query.idTable);
    }
  }, [isReady]);

  return (
    <section className="dashboard-container overflow-auto">
      <Sidebar userData={user} countData={counting} />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <Navbar activeMenu="tables" />
          <ContentTableDetail data={dataItem} />
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
