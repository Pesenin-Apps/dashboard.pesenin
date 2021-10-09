import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getMenus } from '../../../services/cashier';
import { MenuTypes } from '../../../services/data-types';
import TableRow from './TableRow';
import ButtonPagination from '../../atoms/ButtonPagination';

export default function ContentMenu() {
  const [menus, setMenus] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [countItem, setcountItem] = useState(0);
  const [currentPage, setcurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  const params = {
    search,
    limit: 10,
    page,
  };

  const getMenusAPI = useCallback(async (value) => {
    const response = await getMenus(value);
    setMenus(response.data.data);
    setcountItem(response.data.count);
    setcurrentPage(response.data.pageCurrent);
    setLastPage(response.data.pageMaximum);
  }, [getMenus]);

  useEffect(() => {
    getMenusAPI(params);
  }, [page, search]);

  return (
    <div className="menu-lists mb-30">
      <div className="container">
        <div className="main-content main-content-table overflow-auto">

          <div className="row my-3">
            <div className="col-10">
              <input
                type="text"
                className="form-control rounded-pill border border-2"
                placeholder="Cari Menu..."
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
            </div>
            <div className="col-2">
              <div className="float-end">
                <Link href="/cashier/menus/create">
                  <a className="btn btn-primary rounded-pill">
                    <Image src="/assets/icons/add-white.svg" width={11} height={11} />
                    {' '}
                    Tambah
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <table className="table table-borderless">
            <thead>
              <tr className="color-palette-0">
                <th className="" scope="col">Nama</th>
                <th scope="col">Section</th>
                <th scope="col">Harga</th>
                <th scope="col">Status</th>
                <th scope="col">Opsi</th>
              </tr>
            </thead>
            <tbody>
              {menus.map((menu: MenuTypes) => (
                <TableRow
                  key={menu._id}
                  image={menu.image_url}
                  name={menu.name}
                  type={menu.type.name}
                  category={menu.category.name}
                  price={menu.price}
                  isReady={menu.is_ready}
                  _id={menu._id}
                />
              ))}
            </tbody>
          </table>

          <div className="d-flex justify-content-between mt-4">
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
