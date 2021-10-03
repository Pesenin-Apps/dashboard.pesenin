import Image from 'next/image';
import Link from 'next/link';
import Caption from './Caption';

interface TableDetailContentProps {
  data: {
    _id: string;
    number: number;
    section: {
      name: string;
    }
    used: boolean;
  };
}

export default function TableDetailContent(props: TableDetailContentProps) {
  const { data } = props;

  return (
    <div className="table-detail mb-30">
      <div className="container">

        <div className="main-content main-content-card overflow-auto">
          <section className="detail mx-auto">
            <div className="mb-10">
              <Link href="/cashier/tables">
                <a className="btn-icon" role="button">
                  <Image src="/assets/icons/arrow-left.svg" width={24} height={24} />
                </a>
              </Link>
            </div>
            <div className="row justify-content-center">
              <div className="col-4 text-center">
                <Image src="/assets/qr-sample.svg" width={232} height={232} />
                <div>
                  <a className="btn btn-warning btn-sm rounded-pill">Cetak QR-Code</a>
                </div>
              </div>
              <div className="col-6 my-auto">
                <Caption title="Kode Meja" content={data._id} />
                <Caption title="Nomor Meja" content={data.number.toString()} />
                <Caption title="Letak" content={data.section.name} />

                <Caption title="Status" content={data.used === true ? 'Terisi' : 'Kosong (FREE)'} />
              </div>
              <div className="col-1" />
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
