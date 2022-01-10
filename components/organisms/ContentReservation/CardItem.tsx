import { OrderStatus, ReservationConfirmServingType, ReservationServingType } from '../../../config/constans';
import convertDate from '../../../config/convertdate';
import { OrderItemTypes, OrderTypes } from '../../../services/data-types';
import TableRow from './TableRow';

interface CardItemProps {
  data: OrderTypes;
}

export default function CardItem(props: CardItemProps) {
  const { data } = props;

  return (
    <div className="col-6 mb-3">
      <div className="order-card h-100">
        <div className="d-flex justify-content-between mx-3 mb-3">
          <div className="row-6">
            <p className="text-md color-palette-0 fw-medium m-0">
              {data.table === null ? 'Meja ' : data.table.section.name}
              <strong>
                {data.table === null ? 'Menunggu' : ` No. ${data.table.number}`}
              </strong>
            </p>
            <p className="text-sm color-palette-5 m-0">
              an.
              {' '}
              <b>{data.customer.fullname}</b>
            </p>
            {data.status === OrderStatus.new ? (
              <span className="badge bg-danger">BARU</span>
            ) : data.status === OrderStatus.processed ? (
              <span className="badge bg-theme text-white">PROSES</span>
            ) : (
              <span className="badge bg-success">SELESAI</span>
            )}
            <p className="text-sm color-palette-5 mt-1">
              Dilayani Oleh
              {' '}
              <b>{data.waiter === null ? 'Pelayan Belum Diinputkan' : data.waiter.users.fullname}</b>
            </p>
          </div>
          <div className="row-6">
            <p className="text-md color-palette-0 fw-medium m-0">{convertDate(data.reservation.datetime_plan, 'dd')}</p>
            <p className="text-sm color-palette-5 m-0">
              Jumlah Pelanggan Sebanyak
              {' '}
              <b>{data.reservation.number_of_people}</b>
              {' '}
              Orang
            </p>
            {data.reservation.serving_type === ReservationServingType.ontime ? (
              <span className="badge bg-danger">ON-TIME</span>
            ) : (
              <span className="badge bg-primary">BY CONFIRMATION</span>
            )}
            <br />
            {data.reservation.reservation_confirm === null ? (
              <span />
            ) : data.reservation.reservation_confirm === ReservationConfirmServingType.waiting ? (
              <span className="badge bg-secondary">Menunggu Konfirmasi Pelanggan</span>
            ) : (
              <span className="badge bg-success">Telah Dikonfirmasi Oleh Pelanggan</span>
            )}
          </div>
        </div>
        <hr />
        <table className="table table-borderless color-palette-0 mx-3 mb-3">
          <thead>
            <tr>
              <th scope="col">Produk</th>
              <th scope="col">Qty</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.order_items.map((orderItem: OrderItemTypes) => (
              <TableRow key={orderItem._id} data={orderItem} reservation={data.reservation} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
