import cx from 'classnames';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import {
  OrderStatus,
  OrderType,
  OrderVia,
  ReservationConfirmServingType,
  ReservationServingType,
  ReservationStatus,
  TableStatus,
} from '../../../config/constans';
import convertDate from '../../../config/convertdate';
import {
  getTable,
  getTableSection,
  updateOrder,
  verifyReservation,
} from '../../../services/cashier';
import {
  OrderItemTypes, OrderTypes, TableTypes,
} from '../../../services/data-types';
import NavButtonCreate from '../../molecules/NavButtonCreate';
import BillingDetail from './BillingDetail';
import TableRow from './TableRow';

interface ContentOrderDetailProps {
  data: OrderTypes;
}

export default function ContentOrderDetail(props: ContentOrderDetailProps) {
  const { data } = props;
  const [confirmForm, setConfirmForm] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [table, setTable] = useState('');

  const router = useRouter();

  const rowClass = cx({
    'row-6': data.type === OrderType.dinein,
    'row-4': data.type === OrderType.reservation,
  });

  const fetchAllData = useCallback(async () => {
    const getTables = await getTable();
    setTableData(getTables.data.data);
  }, [getTableSection, getTable]);

  useEffect(() => {
    fetchAllData();
  }, []);

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

  const showConfirmForm = () => {
    if (confirmForm) {
      setConfirmForm(false);
    } else {
      setConfirmForm(true);
    }
  };

  const onSubmitConfirm = async () => {
    if (!table) {
      toast.error('Masukkan Meja Makan!');
    } else {
      Swal.fire({
        title: 'Konfirmasi Reservasi?',
        text: 'Reservasi pelanggan ini akan dikonfirmasi!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ffa700',
        confirmButtonText: 'Ya, konfirmasi!',
        cancelButtonText: 'Batal',
      }).then(async (result) => {
        if (result.isConfirmed) {
          const dataUpdate = new FormData();
          dataUpdate.append('table', table);
          const response = await verifyReservation(data._id, dataUpdate);
          if (!response.error) {
            toast.success('Berhasil, Reservasi telah dikonfirmasi');
            router.reload();
          } else {
            toast.error('Gagal, terjadi kesalahan pada sistem!');
          }
        }
      });
    }
  };

  return (
    <>
      <div className="order-detail mb-30">
        <div className="container">
          <div className="main-content main-content-card overflow-auto">
            <section className="detail mx-auto">
              <div className="d-flex justify-content-between">
                <NavButtonCreate hrefBack="/cashier" />
                <div className="my-auto">
                  {data.type === OrderType.dinein ? (
                    <span className="badge bg-danger">DINE-IN</span>
                  ) : (
                    <span className="badge bg-primary">RESERVATION</span>
                  )}
                  {data?.type === OrderType.reservation && (
                    data?.reservation.status === ReservationStatus.new ? (
                      <span className="badge bg-secondary mx-1">BELUM DIKONFIRMASI</span>
                    ) : (
                      <span className="badge bg-success mx-1">TELAH DIKONFIRMASI</span>
                    )
                  )}
                </div>
              </div>
              <div className="container mt-10">
                <div className="d-flex justify-content-between mx-3 mb-3">
                  <div className={rowClass}>
                    <p className="text-xl color-palette-0 fw-medium m-0">{data.customer !== null ? data.customer.email : data.guest !== null ? data.guest.checkin_number : '-'}</p>
                    <p className="text-md color-palette-0 fw-medium m-0">{data.customer !== null ? data.customer.fullname : data.guest !== null ? data.guest.name : '-'}</p>
                    <p className="text-sm color-palette-5 m-0">{data.customer !== null ? data.customer.phone : data.guest !== null ? data.guest.device_detection : '-'}</p>
                    <p className="text-sm color-palette-0 m-0">
                      {data.table === null ? 'Meja ' : data.table.section.name}
                      <strong>
                        {data.table === null ? 'Menunggu' : ` No. ${data.table.number}`}
                      </strong>
                    </p>
                    {data?.status === OrderStatus.new ? (
                      <span className="badge bg-danger">BARU</span>
                    ) : data?.status === OrderStatus.processed ? (
                      <span className="badge bg-theme text-white">PROSES</span>
                    ) : (
                      <span className="badge bg-success">SELESAI</span>
                    )}
                  </div>
                  <div className={rowClass}>
                    <p className="text-xl color-palette-0 fw-medium m-0">{data.order_number}</p>
                    <p className="text-md color-palette-0 fw-medium m-0">{convertDate(data.createdAt, 'dd')}</p>
                    <p className="text-sm color-palette-0 m-0">{data.waiter === null ? 'Pelayan Belum Diinputkan' : data.waiter.users.fullname}</p>
                    <p className="text-sm color-palette-5 m-0">{data.waiter === null ? 'Pelayan Belum Diinputkan' : data.waiter.users.email}</p>
                    {data.via === OrderVia.guest || data.via === OrderVia.customer ? (
                      <span className="badge bg-theme text-white">Pemesanan Via Pelanggan</span>
                    ) : (
                      <span className="badge bg-secondary">Pemesanan Via Waiter</span>
                    )}
                  </div>
                  {data.type === OrderType.reservation && (
                    <div className={rowClass}>
                      <p className="text-xl color-palette-0 fw-medium m-0">Reservasi</p>
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
                      ) : data.reservation.reservation_confirm
                      === ReservationConfirmServingType.waiting ? (
                        <span className="badge bg-secondary">Menunggu Konfirmasi Pelanggan</span>
                        ) : (
                          <span className="badge bg-success">Telah Dikonfirmasi Oleh Pelanggan</span>
                        )}
                    </div>
                  )}
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
                  {data.type === OrderType.reservation && (
                    data.reservation.status === ReservationStatus.new && (
                      confirmForm ? (
                        <button type="button" className="btn btn-secondary fw-medium text-white text-lg" onClick={showConfirmForm}>
                          Tutup
                        </button>
                      ) : (
                        <button type="button" className="btn btn-primary fw-medium text-white text-lg" onClick={showConfirmForm}>
                          Konfirmasi
                        </button>
                      )
                    )
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {confirmForm && (
        <div className="order-detail mb-30">
          <div className="container">
            <div className="main-content main-content-card overflow-auto">
              <section className="detail mx-auto">
                <div className="container mt-10">
                  <div className="d-flex flex-row  align-items-center justify-content-between mt-10 mb-30">
                    <div className="d-flex flex-row align-items-center">
                      <p className="fw-bold text-xl color-palette-0 mb-10">Konfirmasi Reservasi</p>
                    </div>
                  </div>
                  <div className="row d-flex mx-3 mb-3">
                    <div className="pb-20">
                      <label className="form-label text-lg fw-medium color-palette-0 mb-10">
                        Meja Makan
                        {' '}
                        <span className="text-danger"> * </span>
                      </label>
                      <select className="form-select rounded-pill text-lg" value={table} onChange={(e) => setTable(e.target.value)}>
                        <option>--- Pilih Meja ---</option>
                        {tableData.map(
                          (element: TableTypes) => (
                            <option
                              key={element._id}
                              value={element._id}
                              disabled={element.status !== TableStatus.free}
                            >
                              {element.section.name}
                              {' '}
                              No.
                              {' '}
                              {element.number}
                              {/* {' '}
                              (
                              {element.name}
                              ) */}
                            </option>
                          ),
                        )}
                      </select>
                    </div>
                  </div>
                  <div className="d-md-block d-flex flex-column w-100 pt-20">
                    <button type="button" className="btn bg-theme fw-medium text-white text-lg" onClick={onSubmitConfirm}>
                      Konfirmasi
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
