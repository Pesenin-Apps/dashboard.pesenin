import { useCallback, useEffect, useState } from 'react';
import { getTableSection } from '../../../services/cashier';
import { TableSectionTypes } from '../../../services/data-types';
import Card from './Card';
import ModalDetail from './ModalDetail';

export default function ContentTable() {
  const [tableSectionList, setTableSection] = useState([]);

  const getTableSectionList = useCallback(
    async () => {
      const data = await getTableSection();
      setTableSection(data);
    },
    [getTableSection],
  );

  useEffect(() => {
    getTableSectionList();
  }, []);
  return (
    <>
      <div className="table-lists mb-30">
        <div className="container">
          <div className="row">

            {tableSectionList.map((item: TableSectionTypes) => (
              <Card key={item._id} section={item._id} title={item.name} />
            ))}

          </div>
        </div>
      </div>

      <ModalDetail />

      <div
        className="modal fade"
        id="modalTableCreate"
        // tabIndex="-1"
        aria-labelledby="modalTableCreateLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title color-palette-0" id="modalTableCreateLabel">Tambah Meja</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="pt-0">
                  <label
                    htmlFor="table_number"
                    className="form-label text-lg fw-medium color-palette-0 mb-10"
                  >
                    Nomor
                    Meja
                  </label>
                  <input
                    type="number"
                    className="form-control rounded-pill text-lg"
                    id="table_number"
                    name="table_number"
                    aria-describedby="table_number"
                    placeholder="Masukkan Nomor Meja"
                    min="1"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
              <button type="button" className="btn btn-primary">Tambah</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
