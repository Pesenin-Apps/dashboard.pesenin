export default function ModalDetail() {
  return (
    <div
      className="modal fade"
      id="modalDetail"
      // tabIndex="-1"
      aria-labelledby="modalDetailLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title color-palette-0" id="modalDetailLabel">Detail Pesanan</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="d-flex justify-content-between mx-3 mb-3">
                <div className="row-6">
                  <p className="text-xl color-palette-0 fw-medium m-0">CHECKIN#1624986821657</p>
                  <p className="text-md color-palette-0 fw-medium m-0">Tiyan Attirmidzi</p>
                  <p className="text-sm color-palette-5 m-0">Iphone 12 Max nih boss</p>
                  <p className="text-sm color-palette-0 m-0">
                    Lesehan
                    {' '}
                    <strong>Nomor 3</strong>
                  </p>
                </div>
                <div className="row-6">
                  <p className="text-xl color-palette-0 fw-medium m-0">ORDER#1625940399393</p>
                  <p className="text-md color-palette-0 fw-medium m-0">2021-09-07 04:38:19</p>
                  <p className="text-sm color-palette-0 m-0">Pelayanan 001</p>
                  <p className="text-sm color-palette-5 m-0">waiter01@pesenin.id</p>
                </div>
              </div>
              <hr />
              <table className="table table-borderless color-palette-0">
                <thead>
                  <tr>
                    <th scope="col">Menu</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Udang Kipas Asam Manis</td>
                    <td>2</td>
                    <td>40000</td>
                    <td>80000</td>
                  </tr>
                  <tr>
                    <td>Ikan Bakar Katamba</td>
                    <td>1</td>
                    <td>55000</td>
                    <td>55000</td>
                  </tr>
                  <tr>
                    <td>Udang Kipas Saos Padang</td>
                    <td>3</td>
                    <td>40000</td>
                    <td>120000</td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <div className="d-flex justify-content-around text-center mx-3 mb-3">
                <div className="row-4">
                  <p className="text-md color-palette-5 fw-medium m-0">Subtotal</p>
                  <p className="text-2xl color-palette-0 fw-medium m-0">Rp 255.000</p>
                </div>
                <div className="row-4">
                  <p className="text-md color-palette-5 fw-medium m-0">PPN 10%</p>
                  <p className="text-2xl color-palette-0 fw-medium m-0">Rp 25.500</p>
                </div>
                <div className="row-4">
                  <p className="text-md color-palette-5 fw-medium m-0">Total Pembayaran</p>
                  <p className="text-2xl color-palette-0 fw-medium m-0">Rp 280.500</p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
            <button type="button" className="btn btn-primary">Selesai</button>
          </div>
        </div>
      </div>
    </div>
  );
}
