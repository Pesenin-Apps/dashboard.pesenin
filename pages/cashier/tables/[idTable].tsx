import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../../components/organisms/Navbar';
import Sidebar from '../../../components/organisms/Sidebar';
import ContentTableDetail from '../../../components/organisms/ContentTableDetail';
import { getTableDetail } from '../../../services/cashier';

export default function TableDetail() {
  const { query, isReady } = useRouter();

  const [dataItem, setDataItem] = useState({
    _id: '',
    number: 0,
    section: {
      name: '',
    },
    used: false,
  });

  const getTableDetailAPI = useCallback(async (id) => {
    const data = await getTableDetail(id);
    setDataItem(data);
  }, []);

  useEffect(() => {
    if (isReady) {
      getTableDetailAPI(query.idTable);
    }
  }, [isReady]);
  return (
    <section className="dashboard-container overflow-auto">
      <Sidebar />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <Navbar activeMenu="tables" />
          <ContentTableDetail data={dataItem} />
        </div>
      </main>
    </section>
  );
}
