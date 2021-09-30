export default function Tables() {
  return (
    <>
      <section className="dashboard-container overflow-auto">
        <section className="sidebar">
          <div className="content pt-50 pb-30 ps-30">

            <div className="user text-center pb-50 pe-30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                clipRule="evenodd"
                viewBox="0 0 459 459"
                width="90"
                height="90"
                className="img-fluid mb-20"
              >
                <path
                  fill="#FFA700"
                  d="M7076.31 5911.84c5.48.34 10.87-1.6 14.87-5.36 4.01-3.76 6.28-9.01 6.28-14.51.1-13.99.1-29.39.1-29.39 0-17.67 14.32-32 32-32h171.4c18.78 0 34 15.22 34 34v171.44c0 17.66-14.31 31.96-31.96 31.96h-29.43c-5.52 0-10.8 2.29-14.58 6.31a20.003 20.003 0 00-5.38 14.95c3.09 51.89-15.22 104.78-54.82 144.38-73.65 73.64-193.23 73.64-266.87 0-73.64-73.64-73.64-193.22 0-266.87 39.6-39.6 92.49-57.91 144.39-54.91zm21.25 61.82c0-10.27-7.78-18.87-17.99-19.9-42.23-3.97-85.88 10.15-118.19 42.46-57.38 57.38-57.38 150.55 0 207.94 57.39 57.38 150.56 57.38 207.94 0 32.31-32.31 46.43-75.96 42.36-118.18-1.03-10.16-9.59-17.89-19.8-17.89-17.64-.11-42.73-.11-42.73-.11-11.05 0-20 8.96-20 20v42.77a32.01 32.01 0 01-32 32h-60.36a34.04 34.04 0 01-24.05-9.95 34.05 34.05 0 01-9.96-24.05v-60.36c0-8.48 3.38-16.62 9.38-22.62 6-6 14.14-9.38 22.62-9.38h42.78c11.04 0 20-8.95 20-20v-42.73zm93.2 7.15c0-3.45-2.79-6.25-6.25-6.25h-47.78c-3.45 0-6.25 2.8-6.25 6.25v47.78c0 3.45 2.8 6.25 6.25 6.25h47.78c3.46 0 6.25-2.8 6.25-6.25v-47.78zm-12.5 6.25v35.28h-35.28v-35.28h35.28zm-7.49 7.49h-20.3v20.3h20.3v-20.3zm132.57-126.07c0-3.45-2.8-6.25-6.25-6.25h-47.78c-3.46 0-6.25 2.8-6.25 6.25v47.78c0 3.45 2.79 6.25 6.25 6.25h47.78c3.45 0 6.25-2.8 6.25-6.25v-47.78zm-112.58 0c0-3.45-2.79-6.25-6.25-6.25h-47.78c-3.45 0-6.25 2.8-6.25 6.25v47.78c0 3.45 2.8 6.25 6.25 6.25h47.78c3.46 0 6.25-2.8 6.25-6.25v-47.78zm100.08 6.25v35.28h-35.28v-35.28h35.28zm-112.58 0v35.28h-35.28v-35.28h35.28zm105.11 7.47h-20.35v20.34h20.35v-20.34zm-112.6.02h-20.3v20.3h20.3v-20.3z"
                  transform="translate(-10747.2 -2912.41) translate(3870.48 -2918.17)"
                />
              </svg>
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

        <main className="main-wrapper">

          <div className="ps-lg-0">

            <div className="d-flex justify-content-between mb-30">
              <a href="/cashier" className="btn btn-nav btn-status rounded-pill text-md">
                DAFTAR PESANAN
              </a>
              <a href="/cashier/histories" className="btn btn-nav btn-status rounded-pill text-md">
                RIWAYAT PESANAN
              </a>
              <a href="/cashier/tables" className="btn btn-nav btn-status rounded-pill text-md btn-active">
                MEJA
              </a>
              <a href="/cashier/menus" className="btn btn-nav btn-status rounded-pill text-md">
                DAFTAR MENU
              </a>
              <a href="/cashier/waiters" className="btn btn-nav btn-status rounded-pill text-md">
                PELAYANAN
              </a>
            </div>

            <div className="table-lists mb-30">
              <div className="container">
                <div className="row">

                  <div className="col-6 ps-15 pe-15 pb-lg-3 pb-4">
                    <div className="table-card h-100">
                      <p className="text-xl color-palette-0 fw-medium m-0">Lesehan</p>
                      <div className="row d-flex justify-content-start pt-30 pb-20 ps-30 mx-auto">
                        <a
                          href="/#"
                          className="item-card available"
                          data-bs-toggle="modal"
                          data-bs-target="#modalTableDetail"
                        >
                          1

                        </a>
                        <a href="#" className="item-card available">2</a>
                        <a href="#" className="item-card available">3</a>
                        <a href="#" className="item-card available">4</a>
                        <a href="#" className="item-card available">5</a>
                        <a href="#" className="item-card available">6</a>
                        <a href="#" className="item-card available">7</a>
                        <a href="#" className="item-card available">8</a>
                        <a href="#" className="item-card available">9</a>
                        <a href="#" className="item-card available">10</a>
                        <a
                          href="#"
                          className="item-card add"
                          data-bs-toggle="modal"
                          data-bs-target="#modalTableCreate"
                        >
                          <svg
                            width="53"
                            height="53"
                            viewBox="0 0 53 53"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect x="19.875" width="13.25" height="53" rx="3" fill="#D0D0D0" />
                            <rect
                              x="53"
                              y="20"
                              width="13.25"
                              height="53"
                              rx="3"
                              transform="rotate(90 53 20)"
                              fill="#D0D0D0"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 ps-15 pe-15 pb-lg-3 pb-4">
                    <div className="table-card h-100">
                      <p className="text-xl color-palette-0 fw-medium m-0">Emperan</p>
                      <div className="row d-flex justify-content-start pt-30 pb-20 ps-30 mx-auto">
                        <a href="#" className="item-card available">1</a>
                        <a href="#" className="item-card available">2</a>
                        <a href="#" className="item-card available">3</a>
                        <a href="#" className="item-card available">4</a>
                        <a href="#" className="item-card available">5</a>
                        <a href="#" className="item-card available">6</a>
                        <a href="#" className="item-card available">7</a>
                        <a href="#" className="item-card available">8</a>
                        <a href="#" className="item-card available">9</a>
                        <a href="#" className="item-card available">10</a>
                        <a href="#" className="item-card available">11</a>
                        <a href="#" className="item-card available">12</a>
                        <a href="#" className="item-card available">13</a>
                        <a href="#" className="item-card available">14</a>
                        <a href="#" className="item-card available">15</a>
                        <a href="#" className="item-card available">16</a>
                        <a href="#" className="item-card add">
                          <svg
                            width="53"
                            height="53"
                            viewBox="0 0 53 53"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect x="19.875" width="13.25" height="53" rx="3" fill="#D0D0D0" />
                            <rect
                              x="53"
                              y="20"
                              width="13.25"
                              height="53"
                              rx="3"
                              transform="rotate(90 53 20)"
                              fill="#D0D0D0"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 ps-15 pe-15 pb-lg-3 pb-4">
                    <div className="table-card h-100">
                      <p className="text-xl color-palette-0 fw-medium m-0">Pinggir Laut</p>
                      <div className="row d-flex justify-content-start pt-30 pb-20 ps-30 mx-auto">
                        <a href="#" className="item-card available">1</a>
                        <a href="#" className="item-card available">2</a>
                        <a href="#" className="item-card available">3</a>
                        <a href="#" className="item-card available">4</a>
                        <a href="#" className="item-card available">5</a>
                        <a href="#" className="item-card available">6</a>
                        <a href="#" className="item-card available">7</a>
                        <a href="#" className="item-card available">8</a>
                        <a href="#" className="item-card available">9</a>
                        <a href="#" className="item-card available">10</a>
                        <a href="#" className="item-card available">11</a>
                        <a href="#" className="item-card available">12</a>
                        <a href="#" className="item-card available">13</a>
                        <a href="#" className="item-card add">
                          <svg
                            width="53"
                            height="53"
                            viewBox="0 0 53 53"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect x="19.875" width="13.25" height="53" rx="3" fill="#D0D0D0" />
                            <rect
                              x="53"
                              y="20"
                              width="13.25"
                              height="53"
                              rx="3"
                              transform="rotate(90 53 20)"
                              fill="#D0D0D0"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 ps-15 pe-15 pb-lg-3 pb-4">
                    <div className="table-card h-100">
                      <p className="text-xl color-palette-0 fw-medium m-0">Photobooth Baru</p>
                      <div className="row d-flex justify-content-start pt-30 pb-20 ps-30 mx-auto">
                        <a href="#" className="item-card available">1</a>
                        <a href="#" className="item-card available">2</a>
                        <a href="#" className="item-card available">3</a>
                        <a href="#" className="item-card available">4</a>
                        <a href="#" className="item-card available">5</a>
                        <a href="#" className="item-card available">6</a>
                        <a href="#" className="item-card available">7</a>
                        <a href="#" className="item-card available">8</a>
                        <a href="#" className="item-card available">9</a>
                        <a href="#" className="item-card available">10</a>
                        <a href="#" className="item-card available">11</a>
                        <a href="#" className="item-card available">12</a>
                        <a href="#" className="item-card add">
                          <svg
                            width="53"
                            height="53"
                            viewBox="0 0 53 53"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect x="19.875" width="13.25" height="53" rx="3" fill="#D0D0D0" />
                            <rect
                              x="53"
                              y="20"
                              width="13.25"
                              height="53"
                              rx="3"
                              transform="rotate(90 53 20)"
                              fill="#D0D0D0"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="232"
                            height="232"
                            viewBox="0 0 232 232"
                          >
                            <path fill="#fff" d="M0 0H232V232H0z" />
                            <defs>
                              <path id="p" d="M0 0H8V8H0z" />
                            </defs>
                            <use x="32" y="32" xlinkHref="#p" />
                            <use x="32" y="40" xlinkHref="#p" />
                            <use x="32" y="48" xlinkHref="#p" />
                            <use x="32" y="56" xlinkHref="#p" />
                            <use x="32" y="64" xlinkHref="#p" />
                            <use x="32" y="72" xlinkHref="#p" />
                            <use x="32" y="80" xlinkHref="#p" />
                            <use x="32" y="96" xlinkHref="#p" />
                            <use x="32" y="112" xlinkHref="#p" />
                            <use x="32" y="128" xlinkHref="#p" />
                            <use x="32" y="144" xlinkHref="#p" />
                            <use x="32" y="152" xlinkHref="#p" />
                            <use x="32" y="160" xlinkHref="#p" />
                            <use x="32" y="168" xlinkHref="#p" />
                            <use x="32" y="176" xlinkHref="#p" />
                            <use x="32" y="184" xlinkHref="#p" />
                            <use x="32" y="192" xlinkHref="#p" />
                            <use x="40" y="32" xlinkHref="#p" />
                            <use x="40" y="80" xlinkHref="#p" />
                            <use x="40" y="96" xlinkHref="#p" />
                            <use x="40" y="120" xlinkHref="#p" />
                            <use x="40" y="128" xlinkHref="#p" />
                            <use x="40" y="144" xlinkHref="#p" />
                            <use x="40" y="192" xlinkHref="#p" />
                            <use x="48" y="32" xlinkHref="#p" />
                            <use x="48" y="48" xlinkHref="#p" />
                            <use x="48" y="56" xlinkHref="#p" />
                            <use x="48" y="64" xlinkHref="#p" />
                            <use x="48" y="80" xlinkHref="#p" />
                            <use x="48" y="96" xlinkHref="#p" />
                            <use x="48" y="104" xlinkHref="#p" />
                            <use x="48" y="120" xlinkHref="#p" />
                            <use x="48" y="128" xlinkHref="#p" />
                            <use x="48" y="144" xlinkHref="#p" />
                            <use x="48" y="160" xlinkHref="#p" />
                            <use x="48" y="168" xlinkHref="#p" />
                            <use x="48" y="176" xlinkHref="#p" />
                            <use x="48" y="192" xlinkHref="#p" />
                            <use x="56" y="32" xlinkHref="#p" />
                            <use x="56" y="48" xlinkHref="#p" />
                            <use x="56" y="56" xlinkHref="#p" />
                            <use x="56" y="64" xlinkHref="#p" />
                            <use x="56" y="80" xlinkHref="#p" />
                            <use x="56" y="96" xlinkHref="#p" />
                            <use x="56" y="104" xlinkHref="#p" />
                            <use x="56" y="112" xlinkHref="#p" />
                            <use x="56" y="128" xlinkHref="#p" />
                            <use x="56" y="144" xlinkHref="#p" />
                            <use x="56" y="160" xlinkHref="#p" />
                            <use x="56" y="168" xlinkHref="#p" />
                            <use x="56" y="176" xlinkHref="#p" />
                            <use x="56" y="192" xlinkHref="#p" />
                            <use x="64" y="32" xlinkHref="#p" />
                            <use x="64" y="48" xlinkHref="#p" />
                            <use x="64" y="56" xlinkHref="#p" />
                            <use x="64" y="64" xlinkHref="#p" />
                            <use x="64" y="80" xlinkHref="#p" />
                            <use x="64" y="112" xlinkHref="#p" />
                            <use x="64" y="120" xlinkHref="#p" />
                            <use x="64" y="144" xlinkHref="#p" />
                            <use x="64" y="160" xlinkHref="#p" />
                            <use x="64" y="168" xlinkHref="#p" />
                            <use x="64" y="176" xlinkHref="#p" />
                            <use x="64" y="192" xlinkHref="#p" />
                            <use x="72" y="32" xlinkHref="#p" />
                            <use x="72" y="80" xlinkHref="#p" />
                            <use x="72" y="104" xlinkHref="#p" />
                            <use x="72" y="112" xlinkHref="#p" />
                            <use x="72" y="128" xlinkHref="#p" />
                            <use x="72" y="144" xlinkHref="#p" />
                            <use x="72" y="192" xlinkHref="#p" />
                            <use x="80" y="32" xlinkHref="#p" />
                            <use x="80" y="40" xlinkHref="#p" />
                            <use x="80" y="48" xlinkHref="#p" />
                            <use x="80" y="56" xlinkHref="#p" />
                            <use x="80" y="64" xlinkHref="#p" />
                            <use x="80" y="72" xlinkHref="#p" />
                            <use x="80" y="80" xlinkHref="#p" />
                            <use x="80" y="96" xlinkHref="#p" />
                            <use x="80" y="112" xlinkHref="#p" />
                            <use x="80" y="128" xlinkHref="#p" />
                            <use x="80" y="144" xlinkHref="#p" />
                            <use x="80" y="152" xlinkHref="#p" />
                            <use x="80" y="160" xlinkHref="#p" />
                            <use x="80" y="168" xlinkHref="#p" />
                            <use x="80" y="176" xlinkHref="#p" />
                            <use x="80" y="184" xlinkHref="#p" />
                            <use x="80" y="192" xlinkHref="#p" />
                            <use x="88" y="104" xlinkHref="#p" />
                            <use x="88" y="120" xlinkHref="#p" />
                            <use x="88" y="128" xlinkHref="#p" />
                            <use x="96" y="32" xlinkHref="#p" />
                            <use x="96" y="48" xlinkHref="#p" />
                            <use x="96" y="56" xlinkHref="#p" />
                            <use x="96" y="64" xlinkHref="#p" />
                            <use x="96" y="80" xlinkHref="#p" />
                            <use x="96" y="96" xlinkHref="#p" />
                            <use x="96" y="112" xlinkHref="#p" />
                            <use x="96" y="128" xlinkHref="#p" />
                            <use x="96" y="136" xlinkHref="#p" />
                            <use x="96" y="168" xlinkHref="#p" />
                            <use x="96" y="176" xlinkHref="#p" />
                            <use x="96" y="184" xlinkHref="#p" />
                            <use x="96" y="192" xlinkHref="#p" />
                            <use x="104" y="48" xlinkHref="#p" />
                            <use x="104" y="56" xlinkHref="#p" />
                            <use x="104" y="72" xlinkHref="#p" />
                            <use x="104" y="96" xlinkHref="#p" />
                            <use x="104" y="104" xlinkHref="#p" />
                            <use x="104" y="112" xlinkHref="#p" />
                            <use x="104" y="120" xlinkHref="#p" />
                            <use x="104" y="136" xlinkHref="#p" />
                            <use x="104" y="176" xlinkHref="#p" />
                            <use x="112" y="32" xlinkHref="#p" />
                            <use x="112" y="40" xlinkHref="#p" />
                            <use x="112" y="72" xlinkHref="#p" />
                            <use x="112" y="80" xlinkHref="#p" />
                            <use x="112" y="96" xlinkHref="#p" />
                            <use x="112" y="112" xlinkHref="#p" />
                            <use x="112" y="144" xlinkHref="#p" />
                            <use x="112" y="176" xlinkHref="#p" />
                            <use x="112" y="192" xlinkHref="#p" />
                            <use x="120" y="32" xlinkHref="#p" />
                            <use x="120" y="40" xlinkHref="#p" />
                            <use x="120" y="48" xlinkHref="#p" />
                            <use x="120" y="64" xlinkHref="#p" />
                            <use x="120" y="72" xlinkHref="#p" />
                            <use x="120" y="88" xlinkHref="#p" />
                            <use x="120" y="96" xlinkHref="#p" />
                            <use x="120" y="104" xlinkHref="#p" />
                            <use x="120" y="112" xlinkHref="#p" />
                            <use x="120" y="120" xlinkHref="#p" />
                            <use x="120" y="136" xlinkHref="#p" />
                            <use x="120" y="144" xlinkHref="#p" />
                            <use x="120" y="168" xlinkHref="#p" />
                            <use x="128" y="32" xlinkHref="#p" />
                            <use x="128" y="56" xlinkHref="#p" />
                            <use x="128" y="72" xlinkHref="#p" />
                            <use x="128" y="80" xlinkHref="#p" />
                            <use x="128" y="88" xlinkHref="#p" />
                            <use x="128" y="96" xlinkHref="#p" />
                            <use x="128" y="104" xlinkHref="#p" />
                            <use x="128" y="128" xlinkHref="#p" />
                            <use x="128" y="144" xlinkHref="#p" />
                            <use x="128" y="160" xlinkHref="#p" />
                            <use x="128" y="176" xlinkHref="#p" />
                            <use x="136" y="96" xlinkHref="#p" />
                            <use x="136" y="112" xlinkHref="#p" />
                            <use x="136" y="144" xlinkHref="#p" />
                            <use x="136" y="184" xlinkHref="#p" />
                            <use x="136" y="192" xlinkHref="#p" />
                            <use x="144" y="32" xlinkHref="#p" />
                            <use x="144" y="40" xlinkHref="#p" />
                            <use x="144" y="48" xlinkHref="#p" />
                            <use x="144" y="56" xlinkHref="#p" />
                            <use x="144" y="64" xlinkHref="#p" />
                            <use x="144" y="72" xlinkHref="#p" />
                            <use x="144" y="80" xlinkHref="#p" />
                            <use x="144" y="112" xlinkHref="#p" />
                            <use x="144" y="128" xlinkHref="#p" />
                            <use x="144" y="160" xlinkHref="#p" />
                            <use x="144" y="168" xlinkHref="#p" />
                            <use x="144" y="176" xlinkHref="#p" />
                            <use x="152" y="32" xlinkHref="#p" />
                            <use x="152" y="80" xlinkHref="#p" />
                            <use x="152" y="104" xlinkHref="#p" />
                            <use x="152" y="112" xlinkHref="#p" />
                            <use x="152" y="144" xlinkHref="#p" />
                            <use x="152" y="152" xlinkHref="#p" />
                            <use x="152" y="160" xlinkHref="#p" />
                            <use x="152" y="184" xlinkHref="#p" />
                            <use x="160" y="32" xlinkHref="#p" />
                            <use x="160" y="48" xlinkHref="#p" />
                            <use x="160" y="56" xlinkHref="#p" />
                            <use x="160" y="64" xlinkHref="#p" />
                            <use x="160" y="80" xlinkHref="#p" />
                            <use x="160" y="96" xlinkHref="#p" />
                            <use x="160" y="104" xlinkHref="#p" />
                            <use x="160" y="120" xlinkHref="#p" />
                            <use x="160" y="128" xlinkHref="#p" />
                            <use x="160" y="136" xlinkHref="#p" />
                            <use x="160" y="144" xlinkHref="#p" />
                            <use x="160" y="160" xlinkHref="#p" />
                            <use x="168" y="32" xlinkHref="#p" />
                            <use x="168" y="48" xlinkHref="#p" />
                            <use x="168" y="56" xlinkHref="#p" />
                            <use x="168" y="64" xlinkHref="#p" />
                            <use x="168" y="80" xlinkHref="#p" />
                            <use x="168" y="96" xlinkHref="#p" />
                            <use x="168" y="120" xlinkHref="#p" />
                            <use x="168" y="128" xlinkHref="#p" />
                            <use x="168" y="136" xlinkHref="#p" />
                            <use x="168" y="144" xlinkHref="#p" />
                            <use x="168" y="152" xlinkHref="#p" />
                            <use x="168" y="160" xlinkHref="#p" />
                            <use x="168" y="168" xlinkHref="#p" />
                            <use x="168" y="176" xlinkHref="#p" />
                            <use x="176" y="32" xlinkHref="#p" />
                            <use x="176" y="48" xlinkHref="#p" />
                            <use x="176" y="56" xlinkHref="#p" />
                            <use x="176" y="64" xlinkHref="#p" />
                            <use x="176" y="80" xlinkHref="#p" />
                            <use x="176" y="96" xlinkHref="#p" />
                            <use x="176" y="144" xlinkHref="#p" />
                            <use x="176" y="152" xlinkHref="#p" />
                            <use x="176" y="160" xlinkHref="#p" />
                            <use x="176" y="168" xlinkHref="#p" />
                            <use x="176" y="176" xlinkHref="#p" />
                            <use x="176" y="192" xlinkHref="#p" />
                            <use x="184" y="32" xlinkHref="#p" />
                            <use x="184" y="80" xlinkHref="#p" />
                            <use x="184" y="112" xlinkHref="#p" />
                            <use x="184" y="120" xlinkHref="#p" />
                            <use x="184" y="152" xlinkHref="#p" />
                            <use x="184" y="168" xlinkHref="#p" />
                            <use x="192" y="32" xlinkHref="#p" />
                            <use x="192" y="40" xlinkHref="#p" />
                            <use x="192" y="48" xlinkHref="#p" />
                            <use x="192" y="56" xlinkHref="#p" />
                            <use x="192" y="64" xlinkHref="#p" />
                            <use x="192" y="72" xlinkHref="#p" />
                            <use x="192" y="80" xlinkHref="#p" />
                            <use x="192" y="96" xlinkHref="#p" />
                            <use x="192" y="104" xlinkHref="#p" />
                            <use x="192" y="112" xlinkHref="#p" />
                            <use x="192" y="120" xlinkHref="#p" />
                            <use x="192" y="136" xlinkHref="#p" />
                            <use x="192" y="184" xlinkHref="#p" />
                          </svg>
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

          </div>

        </main>

      </section>
    </>
  );
}
