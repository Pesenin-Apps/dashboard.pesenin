import Image from 'next/image';

export default function ModalDetail() {
  return (
    <div
      className="modal fade"
      id="modalTableDetail"
      // tabindex="-1"
      aria-labelledby="modalTableDetailLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title color-palette-0" id="modalTableDetailLabel">Detail Meja</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="col justify-content-md-center mb-3">
                <div className="row">
                  <Image src="/assets/qr-sample.svg" width={232} height={232} />
                </div>
                <div className="row">
                  <button type="button" className="btn btn-warning btn-sm rounded-pill">Cetak QR-Code</button>
                </div>
              </div>
              <div className="pt-10">
                <p className="text-lg color-palette-0 mb-20">
                  Kode Meja
                  {' '}
                  <span className="table-details">
                    60afd57c4e0bf23b46b82bd9
                  </span>
                </p>
                <p className="text-lg color-palette-0 mb-20">
                  Nomor Meja
                  {' '}
                  <span className="table-details">
                    1
                  </span>
                </p>
                <p className="text-lg color-palette-0 mb-20">
                  Letak
                  {' '}
                  <span className="table-details">
                    Lesehan
                  </span>
                </p>
                <p className="text-lg color-palette-0 mb-20">
                  Status
                  {' '}
                  <span className="table-details">
                    Terisi
                  </span>
                </p>
                {/* <p className="text-lg color-palette-0 mb-20">Status <span
                          className="table-details">Kosong (Free)</span></p> */}
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
          </div>
        </div>
      </div>
    </div>
  );
}
