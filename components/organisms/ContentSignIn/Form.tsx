import Link from 'next/link';

export default function Form() {
  return (
    <form action="">
      <div className="pt-30">
        <label htmlFor="email" className="form-label text-lg fw-medium color-palette-0 mb-10">Email Address</label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          id="email"
          name="email"
          aria-describedby="email"
          placeholder="Masukkan Email Address"
        />
      </div>
      <div className="pt-30">
        <label htmlFor="password" className="form-label text-lg fw-medium color-palette-0 mb-10">Password</label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          id="password"
          name="password"
          aria-describedby="password"
          placeholder="Masukkan Password"
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <Link href="/cashier">
          <a className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16" role="button">Masuk</a>
        </Link>
        {/* <button
              type="submit"
              className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
            >
              Masuk
            </button> */}
      </div>
    </form>
  );
}
