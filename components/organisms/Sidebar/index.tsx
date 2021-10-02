import Image from 'next/image';

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">

        <div className="user text-center pb-50 pe-30">
          <div className="mb-20">
            <Image
              src="/assets/logonotext.svg"
              width={90}
              height={90}
              className="img-fluid mb-20"
            />
          </div>
          <h2 className="fw-bold text-xl color-palette-0 m-0">Cashier Pesenin</h2>
          <p className="color-palette-5 m-0">cashier@pesenin.id</p>
        </div>

        <div className="menus mt-30 pb-50 pe-30">

          <div className="col align-items-center text-lg text-secondary text-center">

            <div className="row pb-50">
              <div className="h5 mb-3">Total Pesanan</div>
              <div className="h2">740</div>
            </div>

            <div className="row pb-50">
              <div className="h5 mb-3">Pesanan Diproses</div>
              <div className="h2">324</div>
            </div>

            <div className="row pb-50">
              <div className="h5 mb-3">Pesanan Selesai</div>
              <div className="h2">1253</div>
            </div>

          </div>

        </div>

        <div className="sidebar-footer pt-73 pe-30">
          <a
            className="btn btn-sign-out w-100 fw-medium text-xs text-center text-white rounded-pill"
            href="/"
            role="button"
          >
            Keluar
          </a>
        </div>

      </div>
    </section>
  );
}
