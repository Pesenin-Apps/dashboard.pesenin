import { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { setTable } from '../../../services/cashier';

interface ModalCreateProps {
  section: string;
}

export default function ModalCreate(props: ModalCreateProps) {
  const { section } = props;
  const router = useRouter();
  const [number, setNumber] = useState('');

  const onSubmit = async () => {
    const data = new FormData();
    data.append('number', number);
    data.append('section', section);
    const result = await setTable(data);
    if (result.error) {
      toast.error(result.message);
    } else {
      toast.success('Berhasil, meja telah Ditambahkan!');
      router.reload();
    }
  };

  return (
    <div className="modal fade" id={`modalTableCreate${section}`} aria-labelledby="modalTableCreateLabel" aria-hidden="true">
      <div className="modal-dialog modal-md">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title color-palette-0" id="modalTableCreateLabel">
              Tambah Meja
            </h5>
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
                <label className="form-label text-lg fw-medium color-palette-0 mb-10">
                  Nomor Meja
                </label>
                <input
                  type="number"
                  className="form-control rounded-pill text-lg"
                  aria-describedby="table_number"
                  placeholder="Masukkan Nomor Meja"
                  min="1"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
            <button type="button" className="btn btn-primary" onClick={onSubmit}>Tambah</button>
          </div>

        </div>
      </div>
    </div>
  );
}
