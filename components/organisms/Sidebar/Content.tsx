import Scoreboard from './Scoreboard';

export default function Content() {
  return (
    <div className="mt-30 pb-50 pe-30">
      <div className="col align-items-center text-lg text-secondary text-center">
        <Scoreboard title="Total Pesanan" amount={740} />
        <Scoreboard title="Pesanan Diproses" />
        <Scoreboard title="Pesanan Selesai" amount={1253} />
      </div>
    </div>
  );
}
