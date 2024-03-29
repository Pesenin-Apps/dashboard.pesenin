import { OrderItemStatus, ReservationConfirmServingType, ReservationServingType } from '../../../config/constans';
import { OrderItemTypes, OrderReservation } from '../../../services/data-types';
import ButtonFinished from '../ContentKitchen/ButtonFinished';
import ButtonProcessed from '../ContentKitchen/ButtonProcessed';

interface TableRowProps {
  data: OrderItemTypes;
  reservation: OrderReservation;
}

export default function TableRow(props: TableRowProps) {
  const { data, reservation } = props;

  return (
    <tr key={data._id} className="align-middle">
      <td>{data.product.name}</td>
      <td>{data.qty}</td>
      <td>
        {reservation.serving_type === ReservationServingType.byconfirmation
        && reservation.reservation_confirm === ReservationConfirmServingType.waiting
          ? <span className="badge bg-secondary">Menunggu Konfirmasi</span>
          : data.status === OrderItemStatus.new ? (
            <span className="badge bg-secondary">Menunggu</span>
          ) : data.status === OrderItemStatus.inqueue ? (
            <ButtonProcessed id={data._id} />
          ) : data.status === OrderItemStatus.inprocess ? (
            <ButtonFinished id={data._id} />
          ) : (
            <span className="badge bg-success">Telah Selesai</span>
          )}
      </td>
    </tr>
  );
}
