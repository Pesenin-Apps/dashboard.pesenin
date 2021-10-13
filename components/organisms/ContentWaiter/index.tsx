import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { getUsers } from '../../../services/cashier';
import { UserTypes } from '../../../services/data-types';
import ButtonPagination from '../../atoms/ButtonPagination';
import TableRow from './TableRow';

export default function ContentWaiter() {
  const [waiters, setWaiters] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [countItem, setCountItem] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const params = {
    search,
    limit: 10,
    page,
    role: 'waiter',
  };

  const getWaiterAPI = useCallback(async (value) => {
    const response = await getUsers(value);
    setWaiters(response.data.data);
    setCountItem(response.data.count);
    setCurrentPage(response.data.pageCurrent);
    setLastPage(response.data.pageMaximum);
    setLoading(true);
  }, [getUsers]);

  useEffect(() => {
    getWaiterAPI(params);
  }, [page, search]);

  return (
    <div className="waiter-lists mb-30">
      <div className="container">
        <div className="main-content main-content-table overflow-auto">

          <div className="row my-3">
            <div className="col-10">
              <input
                type="text"
                className="form-control rounded-pill border border-2"
                placeholder="Cari Pelayanan..."
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
            </div>
            <div className="col-2">
              <div className="float-end">
                <Link href="/cashier/waiters/create">
                  <a className="btn btn-primary rounded-pill">
                    <Image src="/assets/icons/add-white.svg" width={11} height={11} />
                    {' '}
                    Tambah
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {loading ? (
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-0">
                  <th className="" scope="col">Nama</th>
                  <th scope="col">Email</th>
                  <th scope="col">Terdaftar Sejak</th>
                  <th scope="col">Opsi</th>
                </tr>
              </thead>
              <tbody>

                {waiters.map((waiter: UserTypes) => (
                  <TableRow
                    key={waiter._id}
                    _id={waiter._id}
                    fullname={waiter.fullname}
                    email={waiter.email}
                    since={waiter.createdAt}
                  />
                ))}

              </tbody>
            </table>
          ) : (
            <div className="text-center mt-5">
              <div className="spinner-border spinner-load" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="text-secondary">Silahkan Tunggu...</p>
            </div>
          )}

          <div className="d-flex justify-content-between mt-5">
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
    </div>
  );
}
