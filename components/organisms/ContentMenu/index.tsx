import { useCallback, useEffect, useState } from 'react';
import { getMenus } from '../../../services/cashier';
import { MenuTypes } from '../../../services/data-types';
import TableRow from './TableRow';

export default function ContentMenu() {
  const [menus, setMenus] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  // const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [countItem, setcountItem] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  const params = {
    search: '',
    limit: 10,
    page,
  };

  const getMenusAPI = useCallback(async (value) => {
    const response = await getMenus(value);
    setMenus(response.data.data);
    setcountItem(response.data.countAll);
    setLastPage(response.data.pageMaximum);
  }, [getMenus]);

  useEffect(() => {
    getMenusAPI(params);
  }, [page]);

  const onSearch = async (value: string) => {
    setSearchInput(value);
    if (searchInput !== '') {
      // const filteredData = menus.filter((item) => Object.values(item)
      // .join('').toLowerCase().includes(searchInput.toLowerCase()));
      // setFilteredResults(filteredData);
      const filteredData = await getMenus({ search: value });
      setFilteredResults(filteredData.data.data);
    } else {
      setFilteredResults(menus);
    }
  };

  return (
    <div className="menu-lists mb-30">
      <div className="container">
        <div className="main-content main-content-table overflow-auto">

          <div className="row my-3">
            <div className="col-10">
              <input
                type="text"
                className="form-control rounded-pill border border-2"
                placeholder="Cari..."
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
            <div className="col-2">
              <div className="float-end">
                <a
                  href="/cashier/menus/create"
                  type="button"
                  className="btn btn-primary rounded-pill"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                    />
                  </svg>
                  {' '}
                  Tambah
                </a>
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
              {searchInput.length > 0 ? (
                filteredResults.map((menu: MenuTypes) => (
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
                ))
              ) : (
                menus.map((menu: MenuTypes) => (
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
                )))}
            </tbody>
          </table>

          <nav aria-label="Pagination Menus">
            <div className="text-sam text-secondary">
              Jumlah data
              {' '}
              {countItem}
            </div>
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <button type="button" disabled={page === 1} className="page-link" onClick={() => setPage(page - 1)}>
                  Sebelumnya
                </button>
              </li>
              <li className="page-item">
                <button type="button" disabled={lastPage === page} className="page-link" onClick={() => setPage(page + 1)}>
                  Selanjutnya
                </button>
              </li>
            </ul>
          </nav>

        </div>

      </div>
    </div>
  );
}
