import Image from 'next/image';
import Link from 'next/link';
import NumberFormat from 'react-number-format';
import { OrderStatus, OrderType } from '../../../config/constans';
import convertDate from '../../../config/convertdate';
import { OrderTypes } from '../../../services/data-types';

interface CardProps {
  data: OrderTypes,
  id: string;
  time: string;
  tableSection: string;
  tableNumber: string;
  customerName: string;
  paymentAmount: number;
  orderNumber: string;
  status: 'Sedang Diproses' | 'Menunggu Pembayaran'
}

export default function Card(props: Partial<CardProps>) {
  const { data } = props;

  const time: any = data?.type === OrderType.dinein
    ? data.createdAt : data?.reservation.datetime_plan;

  return (
    <div className="col-3 ps-15 pe-15 pb-lg-3 pb-4">
      <Link href={`cashier/orders/${data?._id}`}>
        <a>
          <div className="order-card">
            <div className="d-flex mb-3">
              {data?.status === OrderStatus.new ? (
                <span className="badge bg-danger">BARU</span>
              ) : data?.status === OrderStatus.processed ? (
                <span className="badge bg-theme text-white">PROSES</span>
              ) : (
                <span className="badge bg-success">SELESAI</span>
              )}
              {data?.type === OrderType.dinein ? (
                <span className="badge bg-danger mx-1">DINE IN</span>
              ) : (
                <span className="badge bg-primary mx-1">RESERVATION</span>
              )}
            </div>
            <div className="mb-3">
              <p className="text-md color-palette-0 fw-medium m-0">{convertDate(time, 'dt')}</p>
            </div>
            <div className="d-flex align-items-center mb-20">
              <Image
                src="/assets/table-order.svg"
                width={60}
                height={60}
                className="img-fluid mb-20"
              />
              <p className="color-palette-0 mb-0 ms-12">
                {data?.table === null ? 'Meja' : data?.table.section.name}
                <br />
                <strong>
                  {data?.table === null ? 'Menunggu' : `No. ${data?.table.number}`}
                </strong>
              </p>
            </div>
            <div>
              <p className="text-md color-palette-0 fw-medium m-0">{data?.order_number}</p>
              <p className="text-sm color-palette-5 mb-0 mt-1">Nama Pelanggan</p>
              <p className="text-md color-palette-0 fw-medium m-0 customer-name">{data?.customer.fullname}</p>
              <p className="text-sm color-palette-5 mb-0 mt-1">Total Pembayaran</p>
              <p className="text-xl color-palette-0 fw-medium m-0">
                <NumberFormat value={data?.total_overall} prefix="Rp. " displayType="text" thousandSeparator="." decimalSeparator="," />
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
