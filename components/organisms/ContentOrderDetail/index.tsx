import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { OrderType, OrderVia } from '../../../config/constans';
import convertDate from '../../../config/convertdate';
import { updateOrder } from '../../../services/cashier';
import { OrderItemTypes, OrderTypes } from '../../../services/data-types';
import NavButtonCreate from '../../molecules/NavButtonCreate';
import BillingDetail from './BillingDetail';
import TableRow from './TableRow';

interface ContentOrderDetailProps {
  data: OrderTypes;
}

export default function ContentOrderDetail(props: ContentOrderDetailProps) {
  const { data } = props;

  const router = useRouter();

  const onPaying = async () => {
    Swal.fire({
      title: 'Pesanan Telah Dibayar?',
      text: 'Pesanan ini telah dibayar oleh Pelanggan!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#198754',
      confirmButtonText: 'Ya, telah dibayar!',
      cancelButtonText: 'Batal',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const dataOrder = {
          is_paid: true,
        };
        const response = await updateOrder(data._id, dataOrder);
        if (!response.error) {
          toast.success('Berhasil, Pesanan tersebut telah dibayar');
          router.back();
        } else {
          toast.error('Gagal, terjadi kesalahan!');
        }
      }
    });
  };

  return (
    <div className="order-detail mb-30">
      <div className="container">
        <div className="main-content main-content-card overflow-auto">
          <section className="detail mx-auto">
            <NavButtonCreate hrefBack="/cashier" />
            <div className="container mt-10">
              <div className="d-flex justify-content-between mx-3 mb-3">
                <div className="row-6">
                  <p className="text-xl color-palette-0 fw-medium m-0">{data.customer !== null ? data.customer.email : data.guest !== null ? data.guest.checkin_number : '-'}</p>
                  <p className="text-md color-palette-0 fw-medium m-0">{data.customer !== null ? data.customer.fullname : data.guest !== null ? data.guest.name : '-'}</p>
                  <p className="text-sm color-palette-5 m-0">{data.customer !== null ? data.customer.phone : data.guest !== null ? data.guest.device_detection : '-'}</p>
                  <p className="text-sm color-palette-0 m-0">
                    {data.table.section.name}
                    {' '}
                    <strong>
                      Nomor
                      {' '}
                      {data.table.number}
                    </strong>
                  </p>
                  {data.type === OrderType.dinein ? (
                    <span className="badge bg-danger">DINE-IN</span>
                  ) : (
                    <span className="badge bg-primary">RESERVATION</span>
                  )}
                </div>
                <div className="row-6">
                  <p className="text-xl color-palette-0 fw-medium m-0">{data.order_number}</p>
                  <p className="text-md color-palette-0 fw-medium m-0">{convertDate(data.createdAt, 'dd')}</p>
                  <p className="text-sm color-palette-0 m-0">{data.waiter.users.fullname}</p>
                  <p className="text-sm color-palette-5 m-0">{data.waiter.users.email}</p>
                  {data.via === OrderVia.guest || data.via === OrderVia.customer ? (
                    <span className="badge bg-theme text-white">Pemesanan Via Pelanggan</span>
                  ) : (
                    <span className="badge bg-secondary">Pemesanan Via Waiter</span>
                  )}
                </div>
              </div>
              <hr />
              <table className="table table-borderless color-palette-0">
                <thead>
                  <tr>
                    <th scope="col">Produk</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {data.order_items.map((item: OrderItemTypes) => (
                    <TableRow
                      key={item._id}
                      id={item._id}
                      productName={item.product.name}
                      quantity={item.qty}
                      price={item.price}
                      total={item.total}
                    />
                  ))}
                </tbody>
              </table>
              <hr />
              <div className="d-flex justify-content-around text-center mx-3 mb-3">
                <BillingDetail label="Subtotal" bill={data.total_price} />
                <BillingDetail label="PPN 10%" bill={data.tax} />
                <BillingDetail label="Total Pembayaran" bill={data.total_overall} />
              </div>
              <div className="d-md-block d-flex flex-column w-100 pt-20">
                {(data.status === 3 && data.is_paid === false) && (
                  <button type="button" className="btn btn-success fw-medium text-white text-lg" onClick={onPaying}>
                    Bayar
                  </button>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
