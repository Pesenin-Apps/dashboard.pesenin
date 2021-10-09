import { CountOrderTypes } from '../../../services/data-types';
import Scoreboard from './Scoreboard';

interface ContentProps {
  data: CountOrderTypes;
}

export default function Content(props: ContentProps) {
  const { data } = props;
  return (
    <div className="mt-30 pb-50 pe-30">
      <div className="col align-items-center text-lg text-secondary text-center">
        <Scoreboard title="Total Pesanan" amount={data.all} />
        <Scoreboard title="Pesanan Diproses" amount={data.processed} />
        <Scoreboard title="Pesanan Selesai" amount={data.finished} />
      </div>
    </div>
  );
}
