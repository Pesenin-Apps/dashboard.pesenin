import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import NumberFormat from 'react-number-format';

interface CardProps {
  time: string;
  tableSection: string;
  tableNumber: string;
  customerName: string;
  paymentAmount: number;
  status: 'Sedang Diproses' | 'Menunggu Pembayaran'
}

export default function Card(props: Partial<CardProps>) {
  const {
    time, tableSection, tableNumber, customerName, paymentAmount, status,
  } = props;

  const statusClass = cx({
    'float-end icon-status': true,
    // eslint-disable-next-line quote-props
    'process': status === 'Sedang Diproses',
    'wait-payment': status === 'Menunggu Pembayaran',
  });

  return (
    <div className="col-3 ps-15 pe-15 pb-lg-3 pb-4">
      <Link href="/#">
        <a data-bs-toggle="modal" data-bs-target="#modalDetail">
          <div className="order-card">
            <div className="d-flex justify-content-between mb-3">
              <p className="text-md color-palette-0 fw-medium m-0">{time}</p>
              <span title={status} className={statusClass} />
            </div>
            <div className="d-flex align-items-center mb-20">
              <Image
                src="/assets/table-order.svg"
                width={60}
                height={60}
                className="img-fluid mb-20"
              />
              <p className="color-palette-0 mb-0 ms-12">
                {tableSection}
                <br />
                <strong>
                  No.
                  {' '}
                  {tableNumber}
                </strong>
              </p>
            </div>
            <div>
              <p className="text-sm color-palette-5 mb-0">Nama Pelanggan</p>
              <p className="text-md color-palette-0 fw-medium m-0 customer-name">{customerName}</p>
              <p className="text-sm color-palette-5 mb-0 mt-1">Total Pembayaran</p>
              <p className="text-xl color-palette-0 fw-medium m-0">
                <NumberFormat value={paymentAmount} prefix="Rp. " displayType="text" thousandSeparator="." decimalSeparator="," />
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
