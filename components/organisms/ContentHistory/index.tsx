import { useCallback, useEffect, useState } from 'react';
import convertDate from '../../../config/convertdate';
import { getOrders } from '../../../services/cashier';
import { OrderTypes } from '../../../services/data-types';
import ButtonPagination from '../../atoms/ButtonPagination';
import Card from './CardItem';

export default function ContentHistory() {
  const [histories, setHistories] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [countItem, setcountItem] = useState(0);
  const [currentPage, setcurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const params = {
    search,
    limit: 12,
    page,
    filters: {
      status: [3],
      is_paid: true,
    },
  };

  const getHistoriesAPI = useCallback(async (value) => {
    const response = await getOrders(value, true);
    setHistories(response.data.data);
    setcountItem(response.data.count);
    setcurrentPage(response.data.pageCurrent);
    setLastPage(response.data.pageMaximum);
    setLoading(true);
  }, [getOrders]);

  useEffect(() => {
    getHistoriesAPI(params);
  }, [page, search]);

  return (
    <div className="history-lists mb-30">
      <div className="container">
        <div className="row">

          {loading ? (histories.length !== 0 || search !== '' ? (
            <>
              <div className="col-12 ps-15 pe-15 pb-lg-3 pb-4">
                <div className="search-card">
                  <div className="input-group">
                    <span className="input-group-text" id="search-history">ORDER#</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Cari Riwayat Pesanan..."
                      aria-label="Search Order History"
                      aria-describedby="search-history"
                      onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                      }}
                    />
                  </div>
                </div>
              </div>

              {histories.map((history: OrderTypes) => (
                <Card key={history._id} id={history._id} time={convertDate(history.createdAt, 'dt')} orderNumber={history.order_number} tableSection={history.table.section.name} tableNumber={history.table.number.toString()} customerName={history.customer == null ? '-' : history.customer.name} paymentAmount={history.total_overall} />
              ))}

              <div className="col-12 ps-15 pe-15 pb-lg-3 pb-4">
                <div className="pagination-card">
                  <div className="d-flex justify-content-between">
                    <div className="mt-2">
                      <div className="text-sam text-secondary">
                        Jumlah data
                        {' '}
                        {countItem}
                      </div>
                    </div>
                    <nav aria-label="Pagination Histories">
                      <ul className="pagination justify-content-center">
                        <ButtonPagination disabled={page === 1} onClick={() => setPage(page - 1)} text="Sebelumnya" />
                        <ButtonPagination disabled={lastPage <= page} onClick={() => setPage(page + 1)} text="Selanjutnya" />
                      </ul>
                    </nav>
                    <div className="mt-2">
                      <div className="text-sm text-secondary">
                        Halaman
                        {' '}
                        {currentPage}
                        {' '}
                        dari
                        {' '}
                        {lastPage}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="mt-5 text-center">
              <h6 className="text-secondary">Data tidak ditemukan</h6>
            </div>
          )) : (
            <div className="text-center mt-5">
              <div className="spinner-border spinner-load" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="text-secondary">Silahkan Tunggu...</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
