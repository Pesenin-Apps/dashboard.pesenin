import Image from 'next/image';
import User from './User';

export default function Header() {
  return (
    <div className="text-center pb-50 pe-30">
      <div className="mb-20">
        <Image
          src="/assets/logonotext.svg"
          width={90}
          height={90}
          className="img-fluid mb-20"
        />
      </div>
      <User name="Cashier Pesenin" email="cashier@pesenin.id" />
    </div>
  );
}
