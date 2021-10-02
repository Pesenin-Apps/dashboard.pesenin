export default function Create() {
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
              <a href="/cashier/tables" className="btn btn-nav btn-status rounded-pill text-md">
                MEJA
              </a>
              <a href="/cashier/menus" className="btn btn-nav btn-status rounded-pill text-md">
                DAFTAR MENU
              </a>
              <a href="/cashier/waiters" className="btn btn-nav btn-status rounded-pill text-md btn-active">
                PELAYANAN
              </a>
            </div>

            <div className="waiter-create mb-30">
              <div className="container">

                <div className="main-content main-content-card overflow-auto">
                  <section className="create mx-auto">
                    <div className="mb-30">
                      <a href="/cashier/waiters" className="btn-icon" role="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-arrow-left"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <p className="fw-bold text-xl color-palette-0 mb-10">Tambah Pelayan baru</p>
                          <p className="color-palette-5 m-0">Isi Data Yang Valid</p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row d-flex pt-20">
                      <form action="">
                        <div className="pb-20">
                          <label
                            htmlFor="name"
                            className="form-label text-lg fw-medium color-palette-0 mb-10"
                          >
                            Nama
                            {' '}
                            <span
                              className="text-danger"
                            >
                              *
                            </span>

                          </label>
                          <input
                            type="text"
                            className="form-control rounded-pill text-lg"
                            id="name"
                            name="name"
                            aria-describedby="name"
                            placeholder="Masukkan Nama"
                          />
                        </div>
                        <div className="pb-20">
                          <label
                            htmlFor="email"
                            className="form-label text-lg fw-medium color-palette-0 mb-10"
                          >
                            email
                            {' '}
                            <span
                              className="text-danger"
                            >
                              *
                            </span>

                          </label>
                          <input
                            type="email"
                            className="form-control rounded-pill text-lg"
                            id="email"
                            name="email"
                            aria-describedby="email"
                            placeholder="Masukkan Email"
                          />
                        </div>
                        <div className="pb-20">
                          <label
                            htmlFor="password"
                            className="form-label text-lg fw-medium color-palette-0 mb-10"
                          >
                            Password
                            <span className="text-danger">*</span>

                          </label>
                          <input
                            type="password"
                            className="form-control rounded-pill text-lg"
                            id="password"
                            name="password"
                            aria-describedby="password"
                            placeholder="Masukkan Password"
                          />
                        </div>
                        <div className="pb-20">
                          <label
                            htmlFor="password_confirm"
                            className="form-label text-lg fw-medium color-palette-0 mb-10"
                          >
                            Password
                            Konfirmasi
                            <span className="text-danger">*</span>

                          </label>
                          <input
                            type="password"
                            className="form-control rounded-pill text-lg"
                            id="password_confirm"
                            name="password_confirm"
                            aria-describedby="password_confirm"
                            placeholder="Masukkan Password Konfirmasi"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="d-md-block d-flex flex-column w-100 pt-20">
                      <a
                        href="#"
                        className="btn btn-primary fw-medium text-white text-lg"
                        role="button"
                      >
                        Tambah

                      </a>
                    </div>
                  </section>
                </div>

              </div>
            </div>

          </div>

        </main>

      </section>
    </>
  );
}