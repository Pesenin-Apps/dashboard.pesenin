import Card from './Card';
import ModalDetail from './ModalDetail';

export default function ContentOrder() {
  return (
    <div className="order-lists mb-30">

      <div className="container">
        <div className="row">

          <Card time="2021-09-07 04:38:19" tableSection="Lesehan" tableNumber="3" customerName="Tiyan Attirmidzi" paymentAmount={280500} status="Sedang Diproses" />
          <Card time="2021-09-07 04:38:19" tableSection="Lesehan" tableNumber="3" customerName="Tiyan Attirmidzi" paymentAmount={280500} status="Menunggu Pembayaran" />
          <Card time="2021-09-07 04:38:19" tableSection="Lesehan" tableNumber="3" paymentAmount={280500} status="Menunggu Pembayaran" />
          <Card time="2021-09-10 21:43:23" tableSection="Emperan" tableNumber="13" customerName="Muhammad Primus" paymentAmount={512320} status="Menunggu Pembayaran" />

        </div>
      </div>

      <ModalDetail />

    </div>
  );
}
