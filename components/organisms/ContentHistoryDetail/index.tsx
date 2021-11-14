import convertDate from '../../../config/convertdate';
import { OrderItemTypes, OrderTypes } from '../../../services/data-types';
import NavButtonCreate from '../../molecules/NavButtonCreate';
import BillingDetail from './BillingDetail';
import TableRow from './TableRow';

interface ContentHistoryDetailProps {
  data: OrderTypes;
}

export default function ContentHistoryDetail(props: ContentHistoryDetailProps) {
  const { data } = props;

  return (
    <div className="order-detail mb-30">
      <div className="container">
        <div className="main-content main-content-card overflow-auto">
          <section className="detail mx-auto">
            <NavButtonCreate hrefBack="/cashier/histories" />
            <div className="container mt-10">
              <div className="d-flex justify-content-between mx-3 mb-3">
                <div className="row-6">
                  <p className="text-xl color-palette-0 fw-medium m-0">{data.customer === null ? '-' : data.customer.checkin_number}</p>
                  <p className="text-md color-palette-0 fw-medium m-0">{data.customer === null ? '-' : data.customer.name}</p>
                  <p className="text-sm color-palette-5 m-0">{data.customer === null ? '-' : data.customer.device_detection}</p>
                  <p className="text-sm color-palette-0 m-0">
                    {data.table.section.name}
                    {' '}
                    <strong>
                      Nomor
                      {' '}
                      {data.table.number}
                    </strong>
                  </p>
                </div>
                <div className="row-6">
                  <p className="text-xl color-palette-0 fw-medium m-0">{data.order_number}</p>
                  <p className="text-md color-palette-0 fw-medium m-0">{convertDate(data.createdAt, 'dd')}</p>
                  <p className="text-sm color-palette-0 m-0">{data.waiter.users.fullname}</p>
                  <p className="text-sm color-palette-5 m-0">{data.waiter.users.email}</p>
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
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
