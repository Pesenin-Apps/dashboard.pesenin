export default function Cashier() {
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
              <a href="/cashier/orders" className="btn btn-nav btn-status rounded-pill text-md btn-active">
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
              <a href="/cashier/waiters" className="btn btn-nav btn-status rounded-pill text-md">
                PELAYANAN
              </a>
            </div>

            <div className="order-lists mb-30">
              <div className="container">
                <div className="row">
                  <div className="col-3 ps-15 pe-15 pb-lg-3 pb-4">
                    <a href="/#" data-bs-toggle="modal" data-bs-target="#modalDetail">
                      <div className="order-card">
                        <div className="d-flex justify-content-between mb-3">
                          <p className="text-md color-palette-0 fw-medium m-0">2021-09-07 04:38:19</p>
                          <span title="Sedang Diproses" className="float-end icon-status process" />
                        </div>
                        <div className="d-flex align-items-center mb-20">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="60"
                            viewBox="0 0 512 512.001"
                          >
                            <path
                              fill="#bad9de"
                              d="M469.883 396.707a1.12 1.12 0 01-.942.5c-18.816.008-34.07 15.262-34.07 34.082v4.016c0 2.445-.98 4.797-2.754 6.476a256.68 256.68 0 01-64.758 44.781 9.49 9.49 0 01-4.129.938h-18.835c-5.391 0-9.997 3.36-11.836 8.102-.551 1.421-1.98 5.351-2.555 5.523a254.793 254.793 0 01-54.125 10.11 259.529 259.529 0 00-39.762 0A255.306 255.306 0 01180 500.526c-.45-.14-1.25-.949-1.25-1.215 0-7.007-5.684-12.69-12.691-12.69h-18.887a10.33 10.33 0 01-4.578-1.06 256.681 256.681 0 01-64.766-45.753 15.505 15.505 0 01-4.703-11.137v-3.824c0-16.141-13.086-29.223-29.223-29.227-1.535 0-2.98-.746-3.808-2.039C14.719 353.844 0 306.645 0 256 0 114.812 114.293.32 255.406 0 396.27-.32 510.31 112.031 511.98 252.89c.633 53.157-14.949 102.637-42.097 143.817zm0 0"
                            />
                            <path
                              fill="#1a4d59"
                              d="M470 341.992v54.516a257.221 257.221 0 01-38 45.375v-54.89a5 5 0 00-5-5h-54a5 5 0 00-5 5v99.25a252.915 252.915 0 01-18 7.94 255.933 255.933 0 01-20 6.934V341.992zm-430 51.45a256.954 256.954 0 0038 46.515v-52.965a5 5 0 015-5h54a5 5 0 015 5v98.258a254.816 254.816 0 0038 15.27V341.992H40zm195 117.706c1.375.114 11.98.946 21 .844 1.973-.023 18.895-.637 21-.863V229.992h-42zm0 0"
                            />
                            <path
                              fill="#2e7487"
                              d="M185 325v30a5 5 0 01-5 5H40a5 5 0 01-5-5v-30a5 5 0 015-5h140a5 5 0 015 5zm146-50v-30a5 5 0 00-5-5H186a5 5 0 00-5 5v30a5 5 0 005 5h140a5 5 0 005-5zm139 45H330a5 5 0 00-5 5v30a5 5 0 005 5h140a5 5 0 005-5v-30a5 5 0 00-5-5zm-111 70a9 9 0 00-9 9v95.188a251.892 251.892 0 0018-7.938V399c0-4.973-4.027-9-9-9zm-188 0a9 9 0 00-9 9v95.188a252.25 252.25 0 0018 6.34V399c0-4.973-4.027-9-9-9zm290 0a9 9 0 00-9 9v21.664a257.384 257.384 0 0017.746-23.758c-.945-3.96-4.496-6.906-8.746-6.906zm-197.5-90c-7.457 0-13.5 6.043-13.5 13.5v198.441a269.045 269.045 0 0011.898-.016c.891-.023 1.782-.054 2.668-.085a248.81 248.81 0 002.973-.11c1.176-.054 2.348-.113 3.516-.183.605-.035 1.21-.074 1.816-.113 1.379-.09 2.758-.172 4.129-.286V313.5c0-7.457-6.043-13.5-13.5-13.5zM69 390a9 9 0 00-9 9v21.664a258.057 258.057 0 0018 19.313V399c0-4.973-4.027-9-9-9zm0 0"
                            />
                            <path
                              fill="#f7f2ed"
                              d="M190.184 165.707l-8.57 60a5.001 5.001 0 01-4.95 4.293h-21.328a5.001 5.001 0 01-4.95-4.293l-8.57-60a5 5 0 014.95-5.707h38.468c3.043 0 5.383 2.695 4.95 5.707zM365.234 160h-38.468a5 5 0 00-4.95 5.707l8.57 60a5.001 5.001 0 004.95 4.293h21.328a5.001 5.001 0 004.95-4.293l8.57-60c.433-3.012-1.907-5.707-4.95-5.707zm0 0"
                            />
                            <path
                              fill="#e62a2a"
                              d="M301 197.5c0 20.71-16.79 37.5-37.5 37.5h-15c-20.71 0-37.5-16.79-37.5-37.5 0-18.14 12.883-33.273 30-36.75V137.5c0-4.14 3.36-7.5 7.5-7.5h15c4.14 0 7.5 3.36 7.5 7.5v23.25c17.117 3.477 30 18.61 30 36.75zm0 0"
                            />
                            <path
                              fill="#fd4343"
                              d="M301 197.5c0 20.71-16.79 37.5-37.5 37.5S226 218.21 226 197.5c0-18.14 12.883-33.273 30-36.75h5.79c2.03 0 3.85-1.52 3.956-3.547A3.752 3.752 0 00262 153.25c-3.313 0-6-2.688-6-6v-9.438c0-4.105 3.164-7.687 7.27-7.808A7.5 7.5 0 01271 137.5v23.25c17.117 3.477 30 18.61 30 36.75zm0 0"
                            />
                            <path
                              fill="#df8c00"
                              d="M210 321c0 11.598-9.402 21-21 21H47c-11.598 0-21-9.402-21-21V91c0-11.598 9.402-21 21-21s21 9.402 21 21v204a5 5 0 005 5h116c11.598 0 21 9.402 21 21zm0 0"
                            />
                            <path
                              fill="#f39d0b"
                              d="M210 321c0 11.598-9.402 21-21 21H71c-11.598 0-21-9.402-21-21V91c0-7.133 3.563-13.426 9-17.219 5.438 3.793 9 10.086 9 17.219v204a5 5 0 005 5h116c11.598 0 21 9.402 21 21zm273.95-1.004c.015-.332.05-.66.05-.996V91c0-11.598-9.402-21-21-21s-21 9.402-21 21v204a5 5 0 01-5 5H321c-11.598 0-21 9.402-21 21s9.402 21 21 21h142c11.598 0 21-9.402 21-21 0-.34-.035-.668-.05-1.004zm0 0"
                            />
                            <path
                              fill="#df8c00"
                              d="M476 74.527c-4.867 3.848-8 9.79-8 16.473v204a5 5 0 01-5 5h-26a5 5 0 005-5V91c0-11.598 9.402-21 21-21 4.914 0 9.422 1.7 13 4.527zM347 300h-26c-11.598 0-21 9.402-21 21s9.402 21 21 21h26c-11.598 0-21-9.402-21-21s9.402-21 21-21zm0 0"
                            />
                            <path
                              fill="#f39d0b"
                              d="M411 225v32a5 5 0 01-5 5H106a5 5 0 01-5-5v-32a5 5 0 015-5h300a5 5 0 015 5zm0 0"
                            />
                            <path
                              fill="#f6ab39"
                              d="M411 225v32a5 5 0 01-5 5H135a5 5 0 01-5-5v-32a5 5 0 015-5h271a5 5 0 015 5zm0 0"
                            />
                          </svg>
                          <p className="color-palette-0 mb-0 ms-12">
                            Lesehan
                            <br />
                            <strong>No.3</strong>
                          </p>
                        </div>
                        <div>
                          <p className="text-sm color-palette-5 mb-0">Nama Pelanggan</p>
                          <p className="text-md color-palette-0 fw-medium m-0 customer-name">
                            Tiyan Attirmidzi
                          </p>
                          <p className="text-sm color-palette-5 mb-0 mt-1">Total Pembayaran</p>
                          <p className="text-xl color-palette-0 fw-medium m-0">Rp 280.500</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-3 ps-15 pe-15 pb-lg-3 pb-4">
                    <div className="order-card">
                      <div className="d-flex justify-content-between mb-3">
                        <p className="text-md color-palette-0 fw-medium m-0">2021-09-10 21:43:23</p>
                        <span
                          title="Menunggu Pembayaran"
                          className="float-end icon-status wait-payment"
                        />
                      </div>
                      <div className="d-flex align-items-center mb-20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="60"
                          height="60"
                          viewBox="0 0 512 512.001"
                        >
                          <path
                            fill="#bad9de"
                            d="M469.883 396.707a1.12 1.12 0 01-.942.5c-18.816.008-34.07 15.262-34.07 34.082v4.016c0 2.445-.98 4.797-2.754 6.476a256.68 256.68 0 01-64.758 44.781 9.49 9.49 0 01-4.129.938h-18.835c-5.391 0-9.997 3.36-11.836 8.102-.551 1.421-1.98 5.351-2.555 5.523a254.793 254.793 0 01-54.125 10.11 259.529 259.529 0 00-39.762 0A255.306 255.306 0 01180 500.526c-.45-.14-1.25-.949-1.25-1.215 0-7.007-5.684-12.69-12.691-12.69h-18.887a10.33 10.33 0 01-4.578-1.06 256.681 256.681 0 01-64.766-45.753 15.505 15.505 0 01-4.703-11.137v-3.824c0-16.141-13.086-29.223-29.223-29.227-1.535 0-2.98-.746-3.808-2.039C14.719 353.844 0 306.645 0 256 0 114.812 114.293.32 255.406 0 396.27-.32 510.31 112.031 511.98 252.89c.633 53.157-14.949 102.637-42.097 143.817zm0 0"
                          />
                          <path
                            fill="#1a4d59"
                            d="M470 341.992v54.516a257.221 257.221 0 01-38 45.375v-54.89a5 5 0 00-5-5h-54a5 5 0 00-5 5v99.25a252.915 252.915 0 01-18 7.94 255.933 255.933 0 01-20 6.934V341.992zm-430 51.45a256.954 256.954 0 0038 46.515v-52.965a5 5 0 015-5h54a5 5 0 015 5v98.258a254.816 254.816 0 0038 15.27V341.992H40zm195 117.706c1.375.114 11.98.946 21 .844 1.973-.023 18.895-.637 21-.863V229.992h-42zm0 0"
                          />
                          <path
                            fill="#2e7487"
                            d="M185 325v30a5 5 0 01-5 5H40a5 5 0 01-5-5v-30a5 5 0 015-5h140a5 5 0 015 5zm146-50v-30a5 5 0 00-5-5H186a5 5 0 00-5 5v30a5 5 0 005 5h140a5 5 0 005-5zm139 45H330a5 5 0 00-5 5v30a5 5 0 005 5h140a5 5 0 005-5v-30a5 5 0 00-5-5zm-111 70a9 9 0 00-9 9v95.188a251.892 251.892 0 0018-7.938V399c0-4.973-4.027-9-9-9zm-188 0a9 9 0 00-9 9v95.188a252.25 252.25 0 0018 6.34V399c0-4.973-4.027-9-9-9zm290 0a9 9 0 00-9 9v21.664a257.384 257.384 0 0017.746-23.758c-.945-3.96-4.496-6.906-8.746-6.906zm-197.5-90c-7.457 0-13.5 6.043-13.5 13.5v198.441a269.045 269.045 0 0011.898-.016c.891-.023 1.782-.054 2.668-.085a248.81 248.81 0 002.973-.11c1.176-.054 2.348-.113 3.516-.183.605-.035 1.21-.074 1.816-.113 1.379-.09 2.758-.172 4.129-.286V313.5c0-7.457-6.043-13.5-13.5-13.5zM69 390a9 9 0 00-9 9v21.664a258.057 258.057 0 0018 19.313V399c0-4.973-4.027-9-9-9zm0 0"
                          />
                          <path
                            fill="#f7f2ed"
                            d="M190.184 165.707l-8.57 60a5.001 5.001 0 01-4.95 4.293h-21.328a5.001 5.001 0 01-4.95-4.293l-8.57-60a5 5 0 014.95-5.707h38.468c3.043 0 5.383 2.695 4.95 5.707zM365.234 160h-38.468a5 5 0 00-4.95 5.707l8.57 60a5.001 5.001 0 004.95 4.293h21.328a5.001 5.001 0 004.95-4.293l8.57-60c.433-3.012-1.907-5.707-4.95-5.707zm0 0"
                          />
                          <path
                            fill="#e62a2a"
                            d="M301 197.5c0 20.71-16.79 37.5-37.5 37.5h-15c-20.71 0-37.5-16.79-37.5-37.5 0-18.14 12.883-33.273 30-36.75V137.5c0-4.14 3.36-7.5 7.5-7.5h15c4.14 0 7.5 3.36 7.5 7.5v23.25c17.117 3.477 30 18.61 30 36.75zm0 0"
                          />
                          <path
                            fill="#fd4343"
                            d="M301 197.5c0 20.71-16.79 37.5-37.5 37.5S226 218.21 226 197.5c0-18.14 12.883-33.273 30-36.75h5.79c2.03 0 3.85-1.52 3.956-3.547A3.752 3.752 0 00262 153.25c-3.313 0-6-2.688-6-6v-9.438c0-4.105 3.164-7.687 7.27-7.808A7.5 7.5 0 01271 137.5v23.25c17.117 3.477 30 18.61 30 36.75zm0 0"
                          />
                          <path
                            fill="#df8c00"
                            d="M210 321c0 11.598-9.402 21-21 21H47c-11.598 0-21-9.402-21-21V91c0-11.598 9.402-21 21-21s21 9.402 21 21v204a5 5 0 005 5h116c11.598 0 21 9.402 21 21zm0 0"
                          />
                          <path
                            fill="#f39d0b"
                            d="M210 321c0 11.598-9.402 21-21 21H71c-11.598 0-21-9.402-21-21V91c0-7.133 3.563-13.426 9-17.219 5.438 3.793 9 10.086 9 17.219v204a5 5 0 005 5h116c11.598 0 21 9.402 21 21zm273.95-1.004c.015-.332.05-.66.05-.996V91c0-11.598-9.402-21-21-21s-21 9.402-21 21v204a5 5 0 01-5 5H321c-11.598 0-21 9.402-21 21s9.402 21 21 21h142c11.598 0 21-9.402 21-21 0-.34-.035-.668-.05-1.004zm0 0"
                          />
                          <path
                            fill="#df8c00"
                            d="M476 74.527c-4.867 3.848-8 9.79-8 16.473v204a5 5 0 01-5 5h-26a5 5 0 005-5V91c0-11.598 9.402-21 21-21 4.914 0 9.422 1.7 13 4.527zM347 300h-26c-11.598 0-21 9.402-21 21s9.402 21 21 21h26c-11.598 0-21-9.402-21-21s9.402-21 21-21zm0 0"
                          />
                          <path
                            fill="#f39d0b"
                            d="M411 225v32a5 5 0 01-5 5H106a5 5 0 01-5-5v-32a5 5 0 015-5h300a5 5 0 015 5zm0 0"
                          />
                          <path
                            fill="#f6ab39"
                            d="M411 225v32a5 5 0 01-5 5H135a5 5 0 01-5-5v-32a5 5 0 015-5h271a5 5 0 015 5zm0 0"
                          />
                        </svg>
                        <p className="color-palette-0 mb-0 ms-12">
                          Emperan
                          <br />
                          <strong>No.13</strong>
                        </p>
                      </div>
                      <div>
                        <p className="text-sm color-palette-5 mb-0">Nama Pelanggan</p>
                        <p className="text-md color-palette-0 fw-medium m-0 customer-name">
                          Muhammad Primus
                        </p>
                        <p className="text-sm color-palette-5 mb-0 mt-1">Total Pembayaran</p>
                        <p className="text-xl color-palette-0 fw-medium m-0">Rp 512.320</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Start Modal Order Detail */}
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
            {/* End Modal Order Detail */}

          </div>

        </main>

      </section>
    </>
  );
}
